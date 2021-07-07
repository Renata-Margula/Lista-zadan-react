import styled from "styled-components";

export const Span = styled.span`
    display: flex;
    float: right;
    padding: 5px;
    font-size: smaller;
         
@media (max-width: 767px) {
        display: grid;
        float: none;
        flex-wrap: wrap;
        margin-top: 5px;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    color: teal;
    transition: 1s;
        &:hover {
            color: hsl(180, 100%, 35%);
        }
        &:disabled {
            color: gray;
            cursor: not-allowed;
        }
`;