import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Advent Pro', sans-serif;
}`
export const FooterS = styled.footer`
    width: 100%;
    background-color: #1a0000;
    padding: 1rem 3rem;
    margin: 0 auto;
`
export const Middletitle = styled.h2`
    font-size: 2rem;
    color: #b44141;
    text-align: center;
`
export const Selfie = styled.figure`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: purple;
    margin: 1rem auto;
`
export const Img = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`
export const Dados = styled.p`
    border: 1px solid black;
    margin: 0 auto 2rem;
    color: #ffd2d2;
`
export const P = styled.p`
    border: 1px solid black;
    text-align: center;
    margin: 1rem auto 0;
    color:#b44141;
    width: 50%;
`