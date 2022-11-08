import React from "react";
import styled from "styled-components";
import {Container, Button, Input} from "./style.js"
import { useNavigate } from "react-router-dom";

export const Login = () => {

    return(
        <>
            <Container>
            {/* <img src="https://cdn.xxl.thumbs.canstockphoto.com.br/encontrar-pessoas-logo-trabalho-equipe-c%C3%ADrculo-grupo-seis-sala-pessoas-desenho_csp68862395.jpg" 
            alt="imagem do grupo seis" height="50px"></img> */}
                <div>
                    <div>E-mail:</div>
                    <Input type="text" placeholder="Digite seu e-mail" required 
                    pattern="[a-z0-9.]+@[a-z0-9]+\.[a-z]"></Input>
                    <div>Senha:</div>
                    <Input type="password" placeholder="Digite sua senha" required></Input>
                    <hr></hr>
                    <div><Button>Login</Button>
                    &nbsp;
                    <Button>Limpar</Button></div>
                </div>
            </Container>
        </>
    )
}