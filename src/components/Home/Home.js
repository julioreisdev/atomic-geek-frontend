import styled from "styled-components";
import axios from "axios";
import { useContext, useEffect } from "react";
import dadosUser from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import Product from "./Product";

function Category({ name }) {
    return(
        <div>
            <h3>{name}</h3>
        </div>
    )
}

export default function Home() {
    //LOGIC
    const { nome, token, produtos, setProdutos } = useContext(dadosUser);
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = axios.get("http://localhost:5000/home", config);
        promise.then((response) => {
            setProdutos(response.data);
        })
        promise.catch(() => {
            alert("A conexão com o servidor foi perdida, faça o login novamente");
            navigate("/login"); 
        })
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
                    <ion-icon name="cart"></ion-icon>
                    <Link to="/login">
                        <ion-icon name="exit"></ion-icon>
                    </Link>
                </RightTop>
            </Top>
            <Categories>
                <Category name="Notebook"/>
                <Category name="Perifericos"/>
                <Category name="Monitores"/>
                <Category name="PC Gamer"/>
                <Category name="Cadeira Gamer"/>
            </Categories>
            <Content>
                {produtos.length === 0 ? <p>Não há produtos disponíveis no momento</p> : produtos.map((response, index) => <Product key={index} image={response.url} price={response.preco} name={response.nome}/>)}
            </Content>
        </Container>
    )
}

const Container = styled.div `
    width: 100%;
    min-height: 100vh;
    background-color: #010203;
    span {
        width: 100%;
        height: 2rem;
        border: #14ffa7;
    }
`;

const Top = styled.div `
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const LeftTop = styled.div `
    display: flex;
    ion-icon {
        color: #14ffa7;
        font-size: 28px;
        margin-right: 1rem;     
    }

    h1 {
        font-family: "Space Mono", monospace;
        font-weight: 700;
        font-size: 22px;
        line-height: 31px;
        color: #14ffa7;
    }
`;

const RightTop = styled.div `
    ion-icon {
        color: #14ffa7;
        font-size: 30px;
        margin-left: 1rem;     
    }
`;

const Categories = styled.div `
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    overflow-x: scroll;
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
        min-width: 6.5rem;
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

const Content = styled.div `
    p {
        font-family: "Press Start 2P", cursive;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #14ffa7;
        margin: 200px 73px;
    }

`;