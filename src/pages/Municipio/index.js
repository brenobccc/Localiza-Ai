import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as S from './styled';
import Img from './logo.png';


const municipios = [

];



axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/`).then(response => {
  municipios.push(...JSON.parse(JSON.stringify(response.data)))
  //console.log(municipios)
});

export default function (props) {
  const [busca, setBusca] = useState('');




  var lowerBusca = busca.toLowerCase();
  var municipiosFiltrados = municipios.filter((municipio) => municipio.nome.toLowerCase().includes(lowerBusca));




  return <S.Container>
    <S.Header>
      <S.HeaderInput>
      <img src={Img}/>       
      <input placeholder=" Pesquisar Município" type="text" onChange={(ev) => setBusca(ev.target.value)}></input>
      </S.HeaderInput>
      <S.HeaderNav>
        <S.LinkStyled to="/">Estado</S.LinkStyled>
        <S.LinkStyled to="/municipio">Município</S.LinkStyled>
        <S.LinkStyled to="/distrito">Distrito</S.LinkStyled>
      </S.HeaderNav>
     
    </S.Header>
    <S.Body>
      <S.List>{
        (municipiosFiltrados.length === 0) ? (<h1 id="search">Seja bem vindo a Plantaforma Localiza Aí!<br></br>Pesquise informações sobre o seu País de forma fácil.</h1>) : (

          console.log(municipiosFiltrados),
          municipiosFiltrados.map((municipio) => (
            <S.Article key={municipio.id}><div>{municipio.nome}<br></br>Estado: {municipio.microrregiao.mesorregiao.UF.nome} - {municipio.microrregiao.mesorregiao.UF.sigla}</div></S.Article>
          ))
        )}
      </S.List>
    </S.Body>

  </S.Container>

}