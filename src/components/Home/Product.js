import axios from "axios";
import styled from "styled-components";

export default function Product({image, price, name, token, idProduct}) {
    function adicionarCarrinho() {
        const resultado = window.confirm("Vocẽ quer adicionar esse item no seu carrinho?");
        if(resultado) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const body = { idProduct };
            const promise = axios.post("http://localhost:5000/home", body, config);
            promise.then((response) => {
                console.log("Produto enviado pro carrinho");
            })
            promise.catch(() => {
                alert("Não foi possível adicionar esse item no seu carrinho, tente novamente");
            })
        }
    }
    return(
        <ProductInformation>
            <img src={image} alt="Imagem do produto" />
            <div>
                <h4>{name}</h4>
                <h5>R${price}</h5>
                <ion-icon onClick={adicionarCarrinho} name="bag"></ion-icon>
            </div>
        </ProductInformation>
    )
}

const ProductInformation = styled.div `
    display: flex;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    img {
        width: 10rem;
        height: 8rem;
        margin-right: 0.5rem;
        border-radius: 5px;
    }
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        h4 {
            font-family: "Space Mono", monospace;
            font-weight: 700;
            font-size: 1rem;
            color: #14ffa7;
        }
        h5 {
            font-family: "Space Mono", monospace;
            font-weight: 700;
            font-size: 1rem;
            color: #14ffa7;
        }
        ion-icon {
            color: #14ffa7;
            position: absolute;
            font-size: 2rem;
            right: 1rem;
            bottom: 0;
        }
    }
`;