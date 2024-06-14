import React, { useState } from "react";
import Employee from "./components/Employee";

function App() {
  const [employee, setEmployee] = useState({
    id: 1685328248504,
    name: "John Doe",
    email: "johndoe@gmail.com",
    position: "accountant",
    cadreLevel: "Consultant",
    isAdmin: false,
    earnings: {
      basic: 5000,
      transport: 1000,
      overtime: 370,
      housing: 700,
    },
    deductions: {
      tax: 500,
      pension: 200,
    },
  });

  return (
    <div className="App">
      <main className="min-h-screen bg-gray-200 w-full">
        <Employee employee={employee} />
      </main>
    </div>
  );
}

export default App;
