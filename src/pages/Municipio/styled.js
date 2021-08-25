import styled from 'styled-components'
import { Link } from 'react-router-dom';
export const LinkStyled = styled(Link)`
        color: white; 
        text-decoration: none;
        width: 30%;
        height: 100%;
        background: #18773E;
        display: flex;
        justify-content: center; 
        align-items: center;

        & h1{
                text-decoration: none;
                letter-spacing: 1px;
                font-size: 17px;
                color: white;
        }

                    
        &:hover{
                background: #1D9D51;
        }
        
`




export const Header = styled.div`
        width: 100vw;
        height: 200px;
        background: #2FC66B;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
               
`


export const HeaderInput = styled.div`
        width: 50%;
        height: 45%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        & input{
                background: white; 
                height: 40%;
                width: 300px;
                border: 0 solid white;
                border-radius: 40px;
                margin: 2px;
        }

        & img{
                width:180px;
        }

        @media (max-width: 548px){
                & input{
                        width: 200px;
                       
                }
        }
               
`


export const HeaderNav = styled.div`
        width: 60%;
        height: 65%;
        box-sizing: border-box; 
        padding: 5px;
        display: flex;
        justify-content: space-between;

        @media (max-width: 767px) {
                width: 80%;
        }
        @media (max-width: 550px) {
                margin-top:25px;
                height: 35%;
        }
       
        
       
        
`
export const Article = styled.div`
       width:335px;
       height: 150px; 
       background: #009C3B;
       margin: 5px;
       display: flex; 
       border: 0px solid white;
       border-radius: 10px;

       &:hover{
               background: #0CB14A;
       }

       & div{
               height: 50%;
               width: 100%;
               box-sizing: border-box;
               padding: 20px;
               color: white;
               font-size: 15px;
               letter-spacing: 1.1px;
       }

       @media (max-width: 766px) and (min-width: 510px) {
        width: 220px;
       }

       @media (max-width:509px) {
        width: 170px;
        height: 150px;
       }
}
      
`

export const List = styled.div`
display: flex; 
flex-wrap: wrap;
background:#7EF598 ;
height: 100%;
width: 100%;
justify-content: center;

`


export const Body = styled.div`

width: 90%;
margin: auto;
height: 100vh;

`
export const Container = styled.div`
        width: 100vw;
        height: 300px;
        background: #black;
`

