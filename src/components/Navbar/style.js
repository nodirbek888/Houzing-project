import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {ReactComponent as navLogo} from '../../assets/icons/logo.svg'

const Container = styled.div``
const Header = styled.header`
    width: 100%;
    background-color: var(--primaryColor) ;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-touch-callout:none ; // IOS safari 
    -webkit-user-select: none; // safari
    -khtml-user-select:none; //Koncueror HTML
    -moz-user-select: none; //firefox old version
    -ms-user-select: none; //internet explorer / Edge
    user-select: none; // Non-prefixd version, supported by chrome,firefox and opera
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    max-width: 1440px;
    height: 64px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    width: 100%;
    color: #ffffff;
`
const Logo = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`
Logo.Icon = styled(navLogo)``

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    .active{
        color: #00fff5;
    }
`
Nav.Link = styled(NavLink)`
    text-decoration: none;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    margin: 0 32px;
    line-height: 24px;
    color: #ffffff;
`

export {Container,Header,Wrapper,Nav,Logo}