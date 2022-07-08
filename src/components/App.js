import dadosUser from "./Context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro";
import Home from "./Home/Home";
import Carrinho from "./Carrinho/Carrinho";

export default function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [token, setToken] = useState("");
  const [produtos, setProdutos] = useState([]);

  return (
    <BrowserRouter>
      <dadosUser.Provider
        value={{
          nome,
          setNome,
          email,
          setEmail,
          senha,
          setSenha,
          cep,
          setCep,
          rua,
          setRua,
          token,
          setToken,
          produtos,
          setProdutos,
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/carts" element={<Carrinho />} />
        </Routes>
      </dadosUser.Provider>
    </BrowserRouter>
  );
}
