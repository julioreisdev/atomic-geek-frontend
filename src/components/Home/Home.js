import styled from "styled-components";
import logo from "../../assets/img/logo.gif";
import { useContext } from "react";
import dadosUser from "../Context/Context";
import { Link } from "react-router-dom";

export default function Home() {
    //LOGIC
    const { nome } = useContext(dadosUser);
    //UI
    return (
        <Container>
            <Top>
                <LeftTop>
                    <ion-icon name="person-sharp"></ion-icon>
                    <h1>Fulano{/* {nome} */}</h1>
                </LeftTop>
                <RightTop>
                    <ion-icon name="cart"></ion-icon>
                    <ion-icon name="exit"></ion-icon>
                </RightTop>
            </Top>
            <span></span>
        </Container>
    )
}

const Container = styled.div `
    width: 100%;
    min-height: 100vh;
    background-color: #010203;

    span {
        height: 0.2rem;
        margin-top: 1rem;
        background-color: #14ffa7;
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