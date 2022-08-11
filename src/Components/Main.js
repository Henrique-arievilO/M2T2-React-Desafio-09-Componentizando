import React, { Component } from 'react';
import { GlobalStyle } from '../Styles/GlobalStyle';
import { MainS } from '../Styles/MainStyle';
import { Section } from '../Styles/MainStyle';
import { Subtitle } from '../Styles/MainStyle';
import { P } from '../Styles/MainStyle';
import { Container } from '../Styles/MainStyle';
import { Subcontainer } from '../Styles/MainStyle';
import { Middletitle } from '../Styles/MainStyle';
import { ListBox } from '../Styles/MainStyle';
import { Li } from '../Styles/MainStyle';
import { Photobox } from '../Styles/MainStyle';
import { Photo } from '../Styles/MainStyle';
import { Caption } from '../Styles/MainStyle';
import P3 from '../img/p3.jpeg';
import P2 from '../img/p2.jpeg'; 
import P1 from '../img/p1.jpeg';

export default class Main extends Component{

  state = {
    Picture: [
      {
        id:1,
        Img: P1,
        Name: 'Pão de queijo tradicional',
      },
      {
        id:2,
        Img: P2,
        Name: 'Pão de queijo recheado',
      },
      {
        id:3,
        Img: P3,
        Name: 'Pão de queijo com cafézinho',
      }
    ]
  }
    render(){
      return(
        <>
          <GlobalStyle/>
          <MainS>
            <Section>
              <Subtitle>História</Subtitle>
              <P>A região que hoje é ocupada por Minas Gerais foi inicialmente desbravada lá pelo século XVI pelos bandeirantes em busca de ouro e pedras preciosas. A capitania de São Paulo e Minas de Ouro foi criada em 1709 e desmembrada onze anos depois, ficando uma capitania para cada estado.</P>
              <P>No século XVIII, a região foi povoada sendo um importante centro econômico para Portugal que criou formas rígidas de arrecadação de impostos. Essa rigidez desencadeou o movimento político conhecido como Inconfidência Mineira que teve como principal personagem Joaquim José da Silva Xavier – Tiradentes.</P>
              <P>A mineração na economia do estado inibiu outras atividades, fazendo com que a cafeicultura só fosse introduzida no século XIX. O café logo tornou-se a principal atividade da província, trazendo um surto de prosperidade.</P>
              <P>A primeira vila do estado foi Mariana, hoje município mineiro, sendo habitada primeiramente em 1696 e elevada à cidade somente em 1745 por ordem do rei Dom João V.</P>
              <P>Minas Gerais é um estado da região Sudeste, com 853 municípios. Faz limite com São Paulo, Mato Grosso do Sul, Rio de Janeiro, Goiás, Distrito Federal, Bahia e Espírito Santo. Possui 586.520,732 km² de área.</P>
            </Section>
            <Section>
              <Subtitle>Comida Favorita</Subtitle>
              <P>Minas Gerais possui uma variedade de pratos típicos que são simplesmente maravilhosos. No entanto, há um que se destaca pela simplicidade embora agrade qualquer paladar mais exigente.</P>
              <P>Isso mesmo! Estou falando do nosso patrimônio gastronômico, o tão aclamado <span>Pão de Queijo mineiro</span>!</P>
              <P>Dentre vários estados brasileiros, há uma certa competição sobre quem detém o título de criador e dono dessa iguaria tão especial. Mas uma coisa eu digo: <span>"Uai, pra cê um trem tão bão desse jeito, só pode ter vindo daqui sô!"</span></P>
            </Section>
            <Section>
              <Subtitle>Pão de Queijo Mineiro</Subtitle>
              <Container>
                <Subcontainer>
                  <Middletitle>Ingredientes:</Middletitle>
                    <ListBox>
                      <Li>1 xícara (chá) de água</Li>
                      <Li>1/2 xícara (chá) de óleo</Li>
                      <Li>1 xícara (chá) de leite</Li>
                      <Li>1 colher (sopa) de sal</Li>
                      <Li>3 xícaras (chá) de polvilho azedo</Li>
                      <Li>2 xícaras (chá) de polvilho doce</Li>
                      <Li>2 e 1/2 xícaras (chá) de queijo de minas meia cura ralado</Li>
                      <Li>2 ovos</Li>
                    </ListBox>
                </Subcontainer>
                <Subcontainer>
                  <Middletitle>Modo de preparo:</Middletitle>
                  <ListBox>
                    <Li>Coloque a água, o óleo, o leite e o sal em uma panela e leve ao fogo até ferver.</Li>
                    <Li>Misture os polvilhos em uma bacia e despeje o líquido quente misturando com uma colher até amornar.</Li>
                    <Li>Sove por 10 minutos.</Li>
                    <Li>Adicione o queijo, misturando bem.</Li>
                    <Li>Acrescente os ovos, um a um, misturando bem a cada adição até obter ponto de enrolar.</Li>
                    <Li>Forme pequenas bolinhas e coloque em uma assadeira.</Li>
                    <Li>Leve ao forno, preaquecido, em temperatura média por 25 minutos ou até dourar levemente.</Li>
                    <Li>Sirva.</Li>
                  </ListBox>
                </Subcontainer>
              </Container>
            </Section>
            <Section>
              <Subtitle>Galeria de Fotos</Subtitle>
              <Container>
                {this.state.Picture.map((item) => (
                <Photobox key={item.id}>
                  <Photo src={item.Img} alt="Fotos de pão de queijo"/>
                  <Caption>{item.Name}</Caption>
                </Photobox>
                ))}
              </Container>
            </Section>
          </MainS>
        </>
      )
    }
  }