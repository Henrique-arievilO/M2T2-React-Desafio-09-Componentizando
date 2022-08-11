import React, { Component } from 'react';
import Autor from '../img/autor.jpg';
import { GlobalStyle } from '../Styles/GlobalStyle';
import { FooterS } from '../Styles/FooterStyle';
import { Middletitle } from '../Styles/FooterStyle';
import { Selfie } from '../Styles/FooterStyle';
import { Img } from '../Styles/FooterStyle';
import Dados from './Dados';
import { P } from '../Styles/MainStyle';

export default class Footer extends Component{

    render(){
      return(
        <>
          <GlobalStyle/>
          <FooterS>
            <Middletitle>Quem sou eu?</Middletitle>
            <Selfie>
              <Img src={Autor} alt="Autor da página"/>
            </Selfie>
            <P>Meu nome é {<Dados name='Henrique'/>}, tenho {<Dados age={29} />} anos e moro no interior de Minas, em Uberlândia no Triângulo Mineiro. Dentre várias paixões estão a música, desenhos, programação e é claro, a boa comida mineira.</P>
            <P>Futuramente pretendo estudar <Dados tech='Sass'/> e <Dados tech='Bootstrap'/>.</P>
            <P>&copy;Produzido por Wanderson Henrique Oliveira - Vai na Web - 2022</P>
          </FooterS>
        </>
      )
    }
  } 