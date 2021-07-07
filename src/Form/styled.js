import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr auto;
    padding: 5px 15px;

@media(max-width:767px) {
    grid-template-columns: 1fr;
}
`;

export const Input = styled.input`
    border: 1px solid #eee;
    height: 35px;
    padding: 15px;
    font-size: 15px;
    margin-top: 5px;
`;

export const Button = styled.button`
    background-color: teal;
    color: white;
    border-style: none;
    font-weight: lighter;
    height: 35px;
    text-align: center;
    font-size: 15px;
    margin-top: 5px;
    cursor: pointer;
    transition: 1.5s;
        &:hover {
            transform: scale(1.2);
            background-color: hsl(180, 100%, 30%);
    }
`;