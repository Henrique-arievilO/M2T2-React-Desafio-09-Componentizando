import React from "react";
import styled from "styled-components";
import { GlobalStyle } from '../Styles/GlobalStyle';

export  const Prop = styled.p`
    display: inline-block;
    color: #b44141;
`

export default function Dados(props){

    return(
        <>
            <GlobalStyle/>
            <Prop>{props.name}</Prop>
            <Prop>{props.age}</Prop>
            <Prop>{props.tech}</Prop>
        </>
    )
}