import dadosUser from "./Context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
  const [nome, setNome] = useState("");

  return (
    <BrowserRouter>
      <dadosUser.Provider
        value={{
          nome,
          setNome,
        }}
      >
        <>Aqui é o app</>
        <Routes></Routes>
      </dadosUser.Provider>
    </BrowserRouter>
  );
}
