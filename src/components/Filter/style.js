import styled from 'styled-components'
import {ReactComponent as Home} from '../../assets/icons/home.svg'
import {ReactComponent as Settings} from '../../assets/icons/settings.svg'
import {ReactComponent as Search} from '../../assets/icons/search.svg'
const Conatiner = styled.div`
    width: 100%;
    display: flex;
    margin: 10px 0px;
    justify-content: center;
`
const Icon = styled.div``
Icon.Home = styled(Home)`
    margin-right: 8px;
    margin-top: 6px;
`
Icon.Settings =styled(Settings)`
    margin-right: 8px;
`
Icon.Search=styled(Search)`
        margin-right: 8px;
`

const Form = styled.div`
    max-width: 1400px;
    /* padding: 0px 20px; */
    width: 100%;
    height: 64px;
    display: flex;
    background-color: #ffffff;
    align-items: center;
`
const Advanced = styled.div`
    width: fit-content;
    height: fit-content;
    text-transform: capitalize;
`

Advanced.Title = styled.h2`
    font-family: 'Montserrat';
    margin-top: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0D263B;
`
Advanced.Input = styled.div`
    display: flex;
    align-items: center;
`
Advanced.Btn = styled.div`
    display: flex;
    justify-content: flex-end;
`

export {Conatiner,Form,Icon,Advanced} 