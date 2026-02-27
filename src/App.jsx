import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartComponent from "./components/ChartComponent";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filters
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      // ✅ Fetch all data; filtering is done on frontend
      const res = await axios.get("http://localhost:5000/api/sales");
      setData(res.data);
    } catch (err) {
      console.error(err);
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Apply frontend filters
  const filteredData = data.filter(item => {
    const matchesCategory = category ? item.category.toLowerCase().includes(category.toLowerCase()) : true;
    const matchesStatus = status ? item.status.toLowerCase().includes(status.toLowerCase()) : true;

    const itemDate = new Date(item.date);
    const matchesStart = startDate ? itemDate >= new Date(startDate) : true;
    const matchesEnd = endDate ? itemDate <= new Date(endDate) : true;

    return matchesCategory && matchesStatus && matchesStart && matchesEnd;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Data Analytics Dashboard</h1>

      {/* Filters */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* ✅ Pass filtered data to charts */}
      {!loading && !error && <ChartComponent data={filteredData} />}
    </div>
  );
}

export default App;