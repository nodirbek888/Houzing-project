import styled from "styled-components";
import {ReactComponent as discord} from '../../../assets/icons/discord.svg'
import {ReactComponent as house} from '../../../assets/icons/house.svg'
import {ReactComponent as calculator} from '../../../assets/icons/calculator.svg'
import {ReactComponent as maps} from '../../../assets/icons/maps.svg'

const Container = styled.div`
  margin-top: 96px;
  width: 100%;
  height: 434px;
  background-color: #F5F7FC;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Wrapper = styled.div`
  width:1440px ;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

const Title = styled.div`
  margin-top: 48px;
    .text-center{
      text-align: center;
    }
`


const Section = styled.div`
  text-align: center;
  max-width: 250px;
`
const Icon = styled.div``
Icon.Discord = styled(discord)``
Icon.House = styled(house)``
Icon.Calculator = styled(calculator)``
Icon.Maps = styled(maps)``


export {Container,Wrapper,Title,Section,Icon}