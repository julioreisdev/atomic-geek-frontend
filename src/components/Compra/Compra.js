import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import dadosUser from "../Context/Context";
import axios from "axios";

function Product({name, price}) {
	return (
		<Information>
			<p>{name}</p>
			<Value>R${price.replace(".", ",")}</Value>
		</Information>
	)
}

export default function Compra() {
	//LOGIC
	const { token } = useContext(dadosUser);
	const navigate = useNavigate();
	const [produtos, setProdutos] = useState([]);
	const [total, setTotal] = useState("");
	const [selecionarPagamento, setSelecionarPagamento] = useState("");
  const lista = [
		{id: "", name: ""},
    {id: "Dinheiro", name: "Dinheiro"},
    {id: "Cartão", name: "Cartão"},
    {id: "Boleto", name: "Boleto"},
  ];

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

	function submit(e) {
		e.preventDefault();
		const idProducts = [];
		produtos.map(res => {
			idProducts.push(res._id);
		})
		const body = {
			idProducts,
			valorTotal: Number(total).toFixed(2).toString(),
			pagamento: selecionarPagamento
		}
		const promise = axios.post("http://localhost:5000/purchase", body, config);
		promise.then((response) => {
      alert("Compra realizada com sucesso");
			navigate("/home");
    });
    promise.catch(() => {
      alert("Não foi possível efetuar a compra, tente novamente");
			navigate("/carts");
    });
	}

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/carts", config);
    promise
      .then((res) => {
        setTotal(res.data.total);
        setProdutos(res.data.products);
      })
      .catch((err) => {
        alert("A conexão com o servidor foi perdida, faça o login novamente");
        navigate("/login");
      });
  }, []);
	//UI
	return (
		<Container>
			<Header>
				<LeftTop>
					<h1>Pagamento</h1>
					<ion-icon name="cash-outline"></ion-icon>
				</LeftTop>
				<Link to="/carts">
					<ion-icon name="arrow-back-circle-outline"></ion-icon>
				</Link>
			</Header>
			<Content>
					{produtos.map((response, index) => <Product key={index} name={response.nome} price={response.preco}/>)}
			</Content>
			<Footer>
          <form onSubmit={submit}>
						<select value={selecionarPagamento} onChange={e => setSelecionarPagamento(e.target.value)}required >
							{lista.map((item, index) => (
								<option key={index} value={item.id}>{item.name}</option>
							))}        
						</select>
            <button type="submit">Finalizar compra</button>
          </form>
          <div>
            <p>Total:</p>
            <p>R${Number(total).toFixed(2).toString().replace(".", ",")}</p>
          </div>
        </Footer>
		</Container>
	);
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #010203;
`

const Header = styled.header`
	z-index: 1;
	width: 100%;
	position: fixed;
  top: 0;
	background-color: #010203;
	height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
	align-items: center;
	box-shadow: 0 1px 5px #14ffa7;
	ion-icon {
		font-weight: bold;
		font-size: 2rem;
		color: #14ffa7;
	}
`;

const LeftTop = styled.div `
	display: flex;
	align-items: center;
	h1 {
		font-size: 1.3rem;
		font-family: "Press Start 2P", cursive;
		color: #14ffa7;
		
	}
	ion-icon {
		margin-left: 0.4rem;
		font-weight: bold;
		font-size: 2rem;
		color: #14ffa7;
	}
`;

const Content = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 7rem;
	margin-left: 1rem;
	margin-right: 1rem;
	padding-bottom: 12rem;
`;

const Information = styled.div `
	display: flex;
	margin-bottom: 1rem;
	p {
		color: #14ffa7;
		font-family: "Press Start 2P", cursive;
		font-size: 0.8rem;
	}
`;

const Value = styled.p `
	margin-left: 0.5rem;
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
		flex-direction: column;
    justify-content: center;
		align-items: center;
  }

	select {
		padding: 0 2rem;
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

	p {
		font-family: "Space Mono", monospace;
	}
`;
