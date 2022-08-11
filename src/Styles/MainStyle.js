import styled, { createGlobalStyle } from "styled-components";
import Background from '../img/wallpaper.jpg';
import ListStyle from '../img/ListStyle.png'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Advent Pro', sans-serif;
}
`
export const MainS = styled.main`
    width: 100%;
    padding: 1rem 3rem;
    background-image: url(${Background});
    background-size: cover;
    background-repear: no-repeat;
    background-position: center center;
`
export const Section = styled.section`
    border: 3px double #b44141;
    padding: 1rem 3rem 2rem;
    margin: 1rem auto;
    background-color: #000;
    opacity: .8;
`
export const Subtitle = styled.h2`
    font-size: 2rem;
    color: #b44141;
    margin-bottom: 1rem;
    text-align: center;
`
export const P = styled.p`
    font-size: 1rem;
    letter-spacing: .1rem;
    font-weight: 300;
    margin-bottom: 1rem;
    color: #ffd2d2;
`
export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
export const Subcontainer = styled.div`
    margin: 0 auto;
`
export const Middletitle = styled.h3`
    font-size: 1.5rem;
    color: #b44141;
    text-align: center;
`
export const ListBox = styled.ul`
    border: 3px double #ffd2d2;
    width: 75%;
    height: 25rem;
    padding: 1rem;
    margin: 1rem auto;
    list-style-position: inside;
    list-style-image: url(${ListStyle});
    color: #AFC2CD;
`
    export const Li = styled.li`
    margin-bottom: 1rem;
`
export const Photobox = styled.figure`
    img:hover{
        transform: scale(1.2);
    }
`
export const Photo = styled.img`
    width: 250px;
    transition: .3s all;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
`
export const Caption = styled.figcaption`
    font-size: 1rem;
    color: #ffd2d2;
    text-align: center;
    margin-top: 1rem;
` 