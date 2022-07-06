import styled from "styled-components";
import logo from "../../assets/img/logo.gif";
import { useContext } from "react";
import dadosUser from "../Context/Context";
import { Link } from "react-router-dom";

export default function Login() {
  const { email, setEmail, senha, setSenha } = useContext(dadosUser);

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo Atomic Geek" />
        <h1>Atomic Geek</h1>
      </Logo>
      <form>
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
        <button>Entrar</button>
      </form>
      <Link to={"/register"} className="link">
        <p>Cadastre-se!</p>
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
    margin-top: 7rem;
    width: 80px;
    border-radius: 50%;
  }
`;
