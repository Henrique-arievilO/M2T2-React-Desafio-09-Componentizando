import React, { Component } from "react";
import HeaderS from "./Components/Header";
import MainS from "./Components/Main";
import FooterS from "./Components/Footer";
import { GlobalStyle } from "./Styles/GlobalStyle";

export default class App extends Component{

  render(){
    return(

      <>
        <GlobalStyle />
        <HeaderS />
        <MainS />
        <FooterS />
      </>
    )
  }
}