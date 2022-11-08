import React from "react";
// import { Container } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    background-color: #ccc;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 35px;
    color:#111;
    border: 2px solid #999;
    border-radius: 0.4rem;
    transition: 0.5s all ease-out;
    &:hover{
        background-color: #555;
        color: #fff;    
    }
    input:hover {
            cursor: pointer;
            background-color: #fff;

        }
    input{
        background-color: #999;
    }
    button{
        height: 40px;
        width: 120px;
        border-radius: 0.5rem;
    }
    button:hover{
        background-color: #fff;
        color: #00f;
        size: 1.1rem;
    }
`

export const Login = () => {

    return(
        <>
            <Container>
                <div>
                    <div>E-mail:</div>
                    <input type="text" placeholder="Digite seu e-mail" required 
                    pattern="[a-z0-9.]+@[a-z0-9]+\.[a-z]" title="Precisa ser do tipo e-mail contendo @"></input>
                    <div>Senha:</div>
                    <input type="password" placeholder="Digite sua senha" required></input>
                    <hr></hr>
                    <div><button>Login</button>
                    &nbsp;
                    <button>Limpar</button></div>
                </div>
            </Container>
        </>
    )
}