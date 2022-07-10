import styled from "styled-components";
import logo from "../../assets/img/logo.gif";
import { useContext, useState } from "react";
import dadosUser from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoaderBotao from "../Loader/LoaderBotao";

export default function Cadastro() {
  const {
    email,
    setEmail,
    senha,
    setSenha,
  } = useContext(dadosUser);
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [mensagemErro, setMesangemErro] = useState("");
  const [tap, setTap] = useState(false);
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    setTap(true);
    const promise = axios.post("https://atomicgeek.herokuapp.com/register", {
      nome,
      email,
      senha,
      cep,
      rua,
    });
    promise
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        setMesangemErro(err.response.data);
        setTap(false);
      });
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo Atomic Geek" />
        <h1>Atomic Geek</h1>
      </Logo>
      <form onSubmit={(e) => submit(e)}>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="senha"
          name="senha"
          type="password"
          placeholder="Senha"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <input
          id="cep"
          name="cep"
          type="text"
          placeholder="CEP"
          required
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <input
          id="rua"
          name="rua"
          type="text"
          placeholder="Rua"
          required
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
        <p>{mensagemErro}</p>
        <button>{tap ? <LoaderBotao w="40" h="20" /> : "Cadastrar"}</button>
      </form>
      <Link to={"/login"} className="link">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #010203;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 1rem;
    font-family: "Space Mono", monospace;
    color: #14ffa7;
    text-align: center;
    margin-bottom: 1rem;
  }

  form {
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
      width: 60%;
    }

    input,
    button {
      margin-bottom: 0.4rem;
      padding: 0.4rem;
      width: 80%;
    }

    input::placeholder,
    input {
      font-size: 1.3rem;
    }

    button {
      opacity: 0.7;
      color: #14ffa7;
      margin-top: 0.5rem;
      background-color: #010203;
      border-color: #14ffa7;
      font-family: "Press Start 2P", cursive !important;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  font-family: "Press Start 2P", cursive !important;
  flex-direction: column;
  align-items: center;
  color: #14ffa7;
  font-weight: bold;
  img {
    margin-top: 1rem;
    width: 80px;
    border-radius: 50%;
  }
`;
