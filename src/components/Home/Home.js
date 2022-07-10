import styled from "styled-components";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import dadosUser from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import Product from "./Product";

function Category({ name, totalProdutos, setProdutos }) {
  //LOGIC
  function escolherCategoria() {
    if( name === "Tudo") {
      setProdutos(totalProdutos);
    } else {
      const arrayCategoria = totalProdutos.filter(
        (response) => response.categoria === name
      );
      setProdutos(arrayCategoria);
    }
  }
  //UI
  return (
    <div onClick={escolherCategoria}>
      <h3>{name}</h3>
    </div>
  );
}

export default function Home() {
  //LOGIC
  const { nome, token, produtos, setProdutos } = useContext(dadosUser);
  const [totalProdutos, setTotalProdutos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get("https://atomicgeek.herokuapp.com/home", config);
    promise.then((response) => {
      setProdutos(response.data);
      setTotalProdutos(response.data);
    });
    promise.catch(() => {
      alert("A conexão com o servidor foi perdida, faça o login novamente");
      navigate("/login");
    });
  }, []);
  //UI
  return (
    <Container>
      <Top>
        <LeftTop>
          <ion-icon name="person-sharp"></ion-icon>
          <h1>{nome}</h1>
        </LeftTop>
        <RightTop>
          <Link to="/carts">
            <ion-icon name="cart"></ion-icon>
          </Link>
          <Link to="/login">
            <ion-icon name="exit"></ion-icon>
          </Link>
        </RightTop>
      </Top>
      <span></span>
      <Categories>
        <Category
          name="Tudo"
          totalProdutos={totalProdutos}
          setProdutos={setProdutos}
        />
        <Category
          name="Notebook"
          totalProdutos={totalProdutos}
          setProdutos={setProdutos}
        />
        <Category
          name="Perifericos"
          totalProdutos={totalProdutos}
          setProdutos={setProdutos}
        />
        <Category
          name="Monitores"
          totalProdutos={totalProdutos}
          setProdutos={setProdutos}
        />
        <Category
          name="PC Gamer"
          totalProdutos={totalProdutos}
          setProdutos={setProdutos}
        />
        <Category
          name="Cadeira Gamer"
          totalProdutos={totalProdutos}
          setProdutos={setProdutos}
        />
      </Categories>
      <Content>
        {produtos.length === 0 ? (
          <p>Não há produtos disponíveis no momento</p>
        ) : (
          produtos.map((response, index) => (
            <Product
              key={index}
              idProduct={response._id}
              image={response.url}
              price={response.preco}
              name={response.nome}
              token={token}
            />
          ))
        )}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #010203;
`;

const Top = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftTop = styled.div`
  display: flex;
  ion-icon {
    color: #14ffa7;
    font-size: 1.75rem;
    margin-right: 1rem;
  }

  h1 {
    font-family: "Space Mono", monospace;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #14ffa7;
  }
`;

const RightTop = styled.div`
  ion-icon {
    color: #14ffa7;
    font-size: 1.9rem;
    margin-left: 1rem;
  }
`;

const Categories = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  overflow-x: scroll;
  box-shadow: 0 1px 5px #14ffa7;
  div {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-color: #14ffa7;
    height: 2rem;
    min-width: 7rem;
    h3 {
      font-family: "Press Start 2P", cursive;
      font-size: 0.6rem;
      color: #010203;
    }
  }
  div:hover {
    h3 {
      color: #ffffff;
      cursor: pointer;
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  p {
    font-family: "Press Start 2P", cursive;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.4rem;
    text-align: center;
    color: #14ffa7;
    margin: 12.5rem 4.6rem;
  }
`;
