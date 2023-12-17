import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login2 from "./components/Login2";
import Login3 from "./components/Login3";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/login" element={<Login2 />} />
          <Route path="/" element={<Login3 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
