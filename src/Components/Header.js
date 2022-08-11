import React, { Component } from 'react';
import { GlobalStyle } from '../Styles/GlobalStyle';
import { HeaderS } from '../Styles/HeaderStyle';
import { Title } from '../Styles/HeaderStyle';
import { Symbol } from '../Styles/HeaderStyle';

export default class Header extends Component{

    render(){
      return(
        <>
          <GlobalStyle/>
          <HeaderS>
              <Title>Mineirid<Symbol>&#9650;</Symbol>des</Title>
          </HeaderS>
        </>
      )
    }
  }