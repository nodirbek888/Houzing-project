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
  position:absolute;
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
    user-select: none;
  }
  .text-title{
    text-align: center;
    color: #ffffff;
    font-weight: 400;
    font-size: 15px;
    user-select: none;
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
    display: flex;
    align-items: center;
    flex-direction: column;
  .footer-title{
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #ffffff;
  }
`

const Img = styled.img`
  max-height: 571px;
  width: 100%;
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
const ImgWrapper = styled.div`
  width: 100%;
`


export {Container,Title,Img,Icon,Wrapper,Skyepr,Details,Icons,Footer,ImgWrapper}