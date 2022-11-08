import React from "react";
import {Container, Button, Input} from "./style.js"

export const Login = () => {

    return(
        <>
            <Container>
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