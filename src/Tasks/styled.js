import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding: 10px;
    min-height: 15px;
`;

export const Item = styled.li`
    word-break: break-all;
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 10px;
    grid-gap: 20px;
    border-bottom: 1px solid #eee;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    grid-column: 1;
    background-color: green;
    border: none;
    color: white;
    width: 33px;
    height: 33px;
    align-content: center;
    align-items: center;
    justify-content: center;
    transition: background 1s;
    cursor: pointer;
        &:hover {
            background-color: hsl(120, 100%, 30%);
        }

    ${({ remove }) => remove && css`
        background-color: red;
        color: white;
        grid-column: 3;
            &:hover {
                background-color: hsl(0, 100%, 70%);
        }
    `}
`;