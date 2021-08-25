import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as S from './styled';

import Img from './logo.png';


const distritos = [

];



axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/distritos`).then(response => {
  distritos.push(...JSON.parse(JSON.stringify(response.data)))
  //console.log(distritos)
});

export default function (props) {
  const [busca, setBusca] = useState('');
  var control = false;



  var lowerBusca = busca.toLowerCase();
  var distritosFiltrados = distritos.filter((distrito) => distrito.nome.toLowerCase().includes(lowerBusca));




  return <S.Container>
    <S.Header>
      <S.HeaderInput>
      <img src={Img}/>       
        <input placeholder=" Pesquisar Distrito" id="inpu" type="text" onChange={(ev) => setBusca(ev.target.value)}></input>
      </S.HeaderInput>
      <S.HeaderNav>
        <S.LinkStyled to="/">Estado</S.LinkStyled>
        <S.LinkStyled to="/municipio">Município</S.LinkStyled>
        <S.LinkStyled to="/distrito">Distrito</S.LinkStyled>
      </S.HeaderNav>

    </S.Header>
    <S.Body>
      <S.List>{
        (distritosFiltrados.length === 0) ? (<h1 id="search">Seja bem vindo a Plantaforma Localiza Aí!<br></br>Pesquise informações sobre o seu País de forma fácil.</h1>) : (

          //console.log(distritosFiltrados),
          distritosFiltrados.map((distrito) => (
            <S.Article key={distrito.id}><div>{distrito.nome}<br></br>Muncípio: {distrito.municipio.nome}<br></br> Estado: {distrito.municipio.microrregiao.mesorregiao.UF.nome} - {distrito.municipio.microrregiao.mesorregiao.UF.sigla} Região: {distrito.municipio.microrregiao.mesorregiao.UF.regiao.nome}</div></S.Article>
          ))
        )}
      </S.List>
    </S.Body>

  </S.Container>

}