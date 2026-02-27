import React from "react";
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  AreaChart, Area,
  XAxis, YAxis, Tooltip, Legend
} from "recharts";

function ChartComponent({ data }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];

  // Prepare PieChart data: sum amount per category
  const pieData = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = { category: item.category, amount: 0 };
      acc[item.category].amount += item.amount;
      return acc;
    }, {})
  );

  return (
    <div>
      <h2>Charts</h2>

      {/* 1️⃣ Bar Chart: Amount over Date */}
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>

      {/* 2️⃣ Line Chart: Quantity over Date */}
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="quantity" stroke="#82ca9d" />
      </LineChart>

      {/* 3️⃣ Pie Chart: Amount per Category */}
      <PieChart width={400} height={400}>
        <Pie data={pieData} dataKey="amount" nameKey="category" cx="50%" cy="50%" outerRadius={80}>
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      {/* 4️⃣ Area Chart: Amount over Date */}
      <AreaChart width={500} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>

      {/* 5️⃣ Bar Chart: Quantity over Date */}
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantity" fill="#FF8042" />
      </BarChart>
    </div>
  );
}

export default ChartComponent;