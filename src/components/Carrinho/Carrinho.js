import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import dadosUser from "../Context/Context";
import axios from "axios";

export default function Carrinho() {
  const { token } = useContext(dadosUser);
  const [total, setTotal] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get("https://atomicgeek.herokuapp.com/carts", config);
    promise
      .then((res) => {
        setTotal(res.data.total);
        setProdutos(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  function Item(props) {
    function remove(id) {
      const confirm = window.confirm("Deseja remover o ítem do carrinho?");
      if (confirm) {
        const promise = axios.post(
          "https://atomicgeek.herokuapp.com/deleteCarts",
          { idProduct: id },
          config
        );
        promise
          .then((res) => {
            setRefresh(!refresh);
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    }
    return (
      <Produto>
        <img src={props.img} alt="Foto produto" />
        <p>{props.nome}</p>
        <p>R${props.valor.replace(".", ",")}</p>
        <RemoveItem onClick={() => remove(props.id)}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </RemoveItem>
      </Produto>
    );
  }

  return (
    <Container>
      <Header>
        <div>
          <h2>Carrinho</h2>
          <ion-icon name="cart-outline"></ion-icon>
        </div>
        <Link to="/home" className="link">
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
        </Link>
      </Header>
      <Produtos>
        {produtos.map((p, index) => (
          <Item
            key={index}
            img={p.url}
            nome={p.nome}
            valor={p.preco}
            id={p._id}
          />
        ))}
      </Produtos>
      <h3>{produtos.length === 0 ? "Carrinho vazio :(" : null}</h3>
      {produtos.length > 0 ? (
        <Footer>
          <form>
            <Link to="/purchase">
              <button>Comprar</button>
            </Link>
          </form>
          <div>
            <p>Total:</p>
            <p>R${Number(total).toFixed(2).toString().replace(".", ",")}</p>
          </div>
        </Footer>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 10rem;
  min-height: 100vh;
  background-color: #010203;
  font-family: "Space Mono", monospace;
  color: #14ffa7;

  h3 {
    text-align: center;
    font-size: 1rem;
    font-family: "Press Start 2P", cursive !important;
  }
`;

const Header = styled.header`
  z-index: 1;
  width: 100%;
  background-color: #010203;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  box-shadow: 0 1px 5px #14ffa7;
  font-family: "Press Start 2P", cursive !important;
  padding: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ion-icon {
    font-weight: bold;
    font-size: 2rem;
    color: #14ffa7 !important;
  }
`;

const Footer = styled.footer`
  background-color: #14ffa7;
  font-size: 1.3rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  color: #010203;
  font-weight: bold;
  padding: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  form {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  button {
    margin: 1.5rem 1rem;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    background-color: #14ffa7;
    border: 2px solid #010203;
    font-weight: bold;
  }
  button:hover {
    color: #ffffff;
  }
`;

const Produtos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Produto = styled.div`
  position: relative;
  box-shadow: 0 1px 3px #14ffa7;
  padding: 0 0 1rem 0;
  margin: 1rem;
  img {
    width: 250px;
    max-height: 200px;
  }

  p {
    margin: 0.5rem;
  }

  ion-icon {
    font-size: 1.8rem;
    position: absolute;
    top: -10px;
    right: -10px;
  }
`;

const RemoveItem = styled.div``;
