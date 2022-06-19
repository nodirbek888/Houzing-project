import styled from "styled-components";
import { ReactComponent as bed } from '../../assets/icons/beds.svg'
import { ReactComponent as bath } from '../../assets/icons/baths.svg'
import { ReactComponent as car } from '../../assets/icons/car.svg'
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg'
import { ReactComponent as like } from '../../assets/icons/like.svg'
import { ReactComponent as resize } from '../../assets/icons/resize.svg'

const Test = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 380px;
  min-width: 280px;
  height: 450px;
  border: 1px solid #E6E9EC;
  border-radius: 3px;
  position: relative;
  transition-duration: 0.5s;
  &:hover{
    -webkit-box-shadow: 0px 0px 38px 1px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 38px 1px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 38px 1px rgba(34, 60, 80, 0.2);   
  }
`
const Img = styled.img`
  width: 100%;
  height: 220px;
  transition-duration: 1s;
  &:hover{
    filter: brightness(70%);
  }
`
const Fetured = styled.div`
  position: absolute;
  z-index: 999;
  text-transform: uppercase;
  top: 20px;
  left: 20px;
  user-select: none;
  background-color: var(--ativeColor);
  font-weight: 600;
  font-size: 10px;
  color: #ffffff;
  border-radius: 3px;
  padding: 5px 12px;
`
const ForSale = styled.div`
  position: absolute;
  z-index: 999;
  text-transform: uppercase;
  top: 20px;
  right: 20px;
  user-select: none;
  background: var(--primaryColor);
  color: #ffffff;
  font-weight: 600;
  font-size: 10px;
  border-radius: 3px;
  padding: 5px 12px;
`

const Owner = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  top: 201px;
  right: 23px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 40px 3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 40px 3px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 40px 3px rgba(34, 60, 80, 0.2);
`

const InfoWrapper =  styled.div`
  padding: 25px 20px 15px 20px;
  border-top: 1px solid #E6E9EC;
  border-bottom: 1px solid #E6E9EC;
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`

Details.Item =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icon = styled.div``

Icon.Bed = styled(bed)``

Icon.Car = styled(car)``

Icon.Bath = styled(bath)``

Icon.Ruler = styled(ruler)``

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
`

const PriceSection = styled.section``
const OldPrice = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
`
const Characters = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #F6F8F9
`

Icon.Resize = styled(resize)``
Icon.Like = styled(like)``

export {
  Container,
  Test,
  Img,
  InfoWrapper,
  Details,
  Icon,
  Footer,
  PriceSection,
  OldPrice,
  Characters,
  IconWrapper,
  Fetured,
  ForSale,
  Owner
}
