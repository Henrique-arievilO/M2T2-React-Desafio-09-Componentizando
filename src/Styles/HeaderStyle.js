import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Advent Pro', sans-serif;
}`
export const HeaderS = styled.header`
    width: 100%;
    padding: 1rem;
    background-color: #1a0000;
`
export const Title = styled.h1`
    color: #ffd2d2;
    cursor: pointer;
    font-size: 3rem;
`
export const Symbol = styled.span`
    color: #F00;
` 