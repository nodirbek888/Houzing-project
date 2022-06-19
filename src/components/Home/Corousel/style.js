import styled from 'styled-components'
import { Carousel } from 'antd'
import { ReactComponent as LeftArrow} from '../../../assets/icons/leftArrow.svg'
import { ReactComponent as RightArrow} from '../../../assets/icons/rightArrow.svg'

import { ReactComponent as bed } from '../../../assets/icons/c_beds.svg'
import { ReactComponent as bath } from '../../../assets/icons/c_baths.svg'
import { ReactComponent as car } from '../../../assets/icons/c_car.svg'
import { ReactComponent as ruler } from '../../../assets/icons/c_ruler.svg'

const Wrapper = styled.div`
  position: relative;
  height: fit-content;
`
const  Container = styled(Carousel)``

const Skyepr = styled.div`
  position: absolute;
  top: 134px;
  right: 474px;
  left: 474px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 999;
`

const Title = styled.div`
margin-bottom: 24px;
  .des-title{
    text-align: center;
    color: #ffffff;
    font-size: 44px;
  }
  .text-title{
    text-align: center;
    color: #ffffff;
    font-weight: 400;
    font-size: 15px;
  }
`
const Details = styled.div`
width: 326px;
  display: flex;
  justify-content: space-between;
`
Details.Item =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon_title{
    color: white;
  }
`

const Icons = styled.div`

`

Icons.Bed = styled(bed)``

Icons.Car = styled(car)``

Icons.Bath = styled(bath)``

Icons.Ruler = styled(ruler)``

const Footer = styled.div`
margin-top: 24px;
  .footer-title{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #ffffff;
  }
`
const Button = styled.div`
  /* width: 180px;
  height: 44px; */
  padding: 12px 51px;
  color: white;
  margin-top: 48px;
  cursor: pointer;
  border: 1px solid #ffffff ;
  background: transparent;
  user-select: none;
  &:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
`

const Img = styled.img`
  max-height: 571px;
  filter: brightness(40%);
`
const Icon = styled.img``

Icon.Left = styled(LeftArrow)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(100%, -50%);
  width: 45px;
  height: 45px;
  padding: 12px;
  color: white;
  fill: black;
  background:#ffffff4c;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  &:hover{
    opacity: 0.77;
  }
  &:path{
    fill: #0d263b;
  }
`

Icon.Right = styled(RightArrow)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(-100%, -40%);
  width: 45px;
  height: 45px;
  padding: 12px;
  color: white;
  background: #ffffff4c ;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  &:hover{
    opacity: 0.77;
  }
  &:path{
    fill: #0d263b;
  }
`


export {Container,Title,Img,Icon,Wrapper,Skyepr,Details,Icons,Footer,Button}