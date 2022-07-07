import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Carrinho() {
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
        <Produto>
          <img
            src="https://media.istockphoto.com/photos/green-gaming-mouse-on-stone-texture-table-picture-id1197265704?b=1&k=20&m=1197265704&s=170667a&w=0&h=SVAlwsKsBLgtHEBY7jOveT9C6gLaKX6RLJzqbzzmEwo="
            alt="Foto produto"
          />
          <p>Descrição</p>
          <p>R$ 00</p>
          <RemoveItem onClick={() => console.log("Click")}>
            <ion-icon name="close-circle-outline"></ion-icon>
          </RemoveItem>
        </Produto>
        <Produto>
          <img
            src="https://media.istockphoto.com/photos/green-gaming-mouse-on-stone-texture-table-picture-id1197265704?b=1&k=20&m=1197265704&s=170667a&w=0&h=SVAlwsKsBLgtHEBY7jOveT9C6gLaKX6RLJzqbzzmEwo="
            alt="Foto produto"
          />
          <p>Descrição</p>
          <p>R$ 00</p>
          <RemoveItem onClick={() => console.log("Click")}>
            <ion-icon name="close-circle-outline"></ion-icon>
          </RemoveItem>
        </Produto>
      </Produtos>
      <Footer>
        <form>
          <button>Comprar</button>
        </form>
        <div>
          <p>Total:</p>
          <p>R$ 00</p>
        </div>
      </Footer>
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
