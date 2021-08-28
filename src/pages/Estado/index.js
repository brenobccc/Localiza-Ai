import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as S from './styled';
import Img from './logo.png';



export default function Estado(props) {
  const [busca, setBusca] = useState('');
  const [estados, setEstados] = useState([]);


  var lowerBusca = busca.toLowerCase();
  var estadosFiltrados = estados.filter((estado) => estado.nome.toLowerCase().includes(lowerBusca));


  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`).then(response => {
      setEstados((JSON.parse(JSON.stringify(response.data))));
    })
  }, []);


  return <S.Container>
    <S.Header>
      <S.HeaderInput>

        <img src={Img} alt="logo Localiza Ai Site" />         <input placeholder=" Pesquisar Estado" id="inpu" type="text" onChange={(ev) => setBusca(ev.target.value)}></input>

      </S.HeaderInput>
      <S.HeaderNav>
        <S.LinkStyled to="/">Estado</S.LinkStyled>
        <S.LinkStyled to="/municipio">Município</S.LinkStyled>
        <S.LinkStyled to="/distrito">Distrito</S.LinkStyled>
      </S.HeaderNav>

    </S.Header>
    <S.Body>
      <S.List>{
        estadosFiltrados.map((estado) => (
          <S.Article key={estado.id}><div>{estado.nome} - {estado.sigla} <br></br> Região: {estado.regiao.nome}</div></S.Article>
        ))
      }
      </S.List>
    </S.Body>

  </S.Container>

}