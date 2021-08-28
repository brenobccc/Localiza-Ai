import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as S from './styled';
import Img from './logo.png';


export default function Municipio(props) {
  const [busca, setBusca] = useState('');
  const [municipios, setMunicipios] = useState([]);

  var lowerBusca = busca.toLowerCase();
  var municipiosFiltrados = municipios.filter((municipio) => municipio.nome.toLowerCase().includes(lowerBusca));

  useEffect(() => {
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/`).then(response => {
      setMunicipios(JSON.parse(JSON.stringify(response.data)))
      //console.log(municipios)
    });

  }, [])



  return <S.Container>
    <S.Header>
      <S.HeaderInput>
        <img src={Img} alt="logo Localiza Ai Site" />
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

        municipiosFiltrados.map((municipio) => (
          <S.Article key={municipio.id}><div>{municipio.nome}<br></br>Estado: {municipio.microrregiao.mesorregiao.UF.nome} - {municipio.microrregiao.mesorregiao.UF.sigla}</div></S.Article>
        ))
      }
      </S.List>
    </S.Body>

  </S.Container>

}