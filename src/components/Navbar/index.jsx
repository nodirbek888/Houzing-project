import React from "react";
import { navbar } from '../../utils/navbar'
import { useNavigate, Outlet } from "react-router-dom";
import { Button } from "../Generic";
import { Container, Header, Wrapper, Nav, Logo } from './style'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Header>
                <Wrapper>
                    <Logo onClick={() => navigate('/home')}>
                        <Logo.Icon />
                    </Logo>
                    <Nav>
                        {navbar.map(({ id, path, title }) => {
                            return (
                                <Nav.Link to={path} key={id} >{title}</Nav.Link>
                            )
                        })
                        }
                    </Nav>
                    <Button width='120px'>Login</Button>
                </Wrapper>
            </Header>
            <Outlet/>
        </Container>
    )
}
export default Navbar