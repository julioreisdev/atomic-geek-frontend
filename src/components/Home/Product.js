import styled from "styled-components";

export default function Product({image, price, name}) {
    return(
        <ProductInformation>
            <img src={image} alt="Imagem do produto" />
            <div>
                <h4>{name}</h4>
                <h5>R${price}</h5>
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
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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
    }
`;