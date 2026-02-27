# Data Analytics Dashboard

## Overview
This project is a **full-stack Data Analytics Dashboard** built using **React** for the frontend and **Node.js + Express** for the backend.  
It visualizes **sales data** through **5 different charts** (Bar, Line, Pie, Area, Bar) and allows users to **filter data by Category, Status, and Date range**.  

The backend provides REST APIs to fetch sales data from a **MongoDB database** and seed it with sample data.

---

## Tech Stack
- **Frontend:** React, Recharts, Axios  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Other Libraries:** CORS, dotenv  

---

## Features
- 5 charts: Bar, Line, Pie, Area, Bar  
- Filter data by Category, Status, Start Date, and End Date  
- Loading and error handling for API requests  
- Proper folder structure with separate frontend and backend  
- Seeded sample data for immediate testing  

**Bonus / Optional Features (Not Implemented)**:  
- JWT-based authentication  
- Responsive UI  
- Deployment  

---

## API Endpoints

| Method | Endpoint             | Description                     |
|--------|--------------------|---------------------------------|
| GET    | `/api/sales`        | Fetch all sales data            |
| GET    | `/api/sales/seed`   | Seed sample sales data in MongoDB |

---

## Database Schema

**Collection:** `sales`

| Field    | Type   | Description                              |
|----------|--------|------------------------------------------|
| product  | String | Name of the product                       |
| category | String | Product category (Electronics, Fashion) |
| amount   | Number | Sale amount                               |
| quantity | Number | Quantity sold                             |
| date     | Date   | Sale date                                 |
| status   | String | Sale status (Completed, Pending, Cancelled) |

---

## Folder Structure
data-analytics-dashboard/
├─ backend/ ← backend code
│ ├─ server.js
│ ├─ routes/
│ │ └─ saleRoutes.js
│ ├─ models/
│ │ └─ Sale.js
│ └─ .env
├─ frontend/ ← frontend React app
│ ├─ src/
│ │ ├─ App.jsx
│ │ └─ components/ChartComponent.jsx
│ ├─ package.json
│ └─ ...other React files
├─ screenshots/ ← screenshots folder
│ ├─ dashboard.png
│ └─ filtered.png
└─ README.md ← this file


---

## How to Run

### Backend
1. Open terminal and navigate to backend folder:
```bash
cd backend
Install dependencies:

npm install
Start the server:

node server.js
Optional: Seed the database with sample data (run this in browser or Postman):

http://localhost:5000/api/sales/seed
Frontend
Open a new terminal and navigate to frontend folder:

cd frontend
Install dependencies:

npm install
Start the React app:

npm start
Open in browser:

http://localhost:5173
Screenshots(includes in screenshots folder)
Dashboard with all charts: dashboard.png

Filtered charts view: filtered.png

Notes
Ensure MongoDB is running locally or provide your MongoDB URI in .env.

Filters dynamically update charts based on selected Category, Status, and Date range.

The backend is structured for easy expansion, e.g., adding authentication or additional endpoints.

Code is structured with clean separation between frontend and backend folders.

Project Completed By:[Ramsa Ansari]
Submission Date:[27th February 2026]