import React, { useState } from 'react';
import axios from "axios";
import * as S from './styled';
import Img from './logo.png';

const estados = [];

axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`).then(response => {
  estados.push(...JSON.parse(JSON.stringify(response.data)))
});



export default function (props) {
  const [busca, setBusca] = useState('');
  var control = false;



  var lowerBusca = busca.toLowerCase();
  var estadosFiltrados = estados.filter((estado) => estado.nome.toLowerCase().includes(lowerBusca));




  return <S.Container>
    <S.Header>
      <S.HeaderInput>
        
        <img src={Img}/>         <input placeholder=" Pesquisar Estado" id="inpu" type="text" onChange={(ev) => setBusca(ev.target.value)}></input>
     
      </S.HeaderInput>
      <S.HeaderNav>
        <S.LinkStyled to="/">Estado</S.LinkStyled>
        <S.LinkStyled to="/municipio">Município</S.LinkStyled>
        <S.LinkStyled to="/distrito">Distrito</S.LinkStyled>
      </S.HeaderNav>

    </S.Header>
    <S.Body>
      <S.List>{
        (estadosFiltrados.length === 0) ? (<h1 id="search">Seja bem vindo a Plantaforma Localiza Aí!<br></br>Pesquise informações sobre o seu País de forma fácil.</h1>) : (

          //console.log(estadosFiltrados),
          estadosFiltrados.map((estado) => (
            <S.Article key={estado.id}><div>{estado.nome} - {estado.sigla} <br></br> Região: {estado.regiao.nome}</div></S.Article>
          ))
        )}
      </S.List>
    </S.Body>

  </S.Container>

}