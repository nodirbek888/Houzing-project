import styled from 'styled-components'
import { ReactComponent as locatsia } from '../../assets/icons/locatsia.svg'
import { ReactComponent as phone } from '../../assets/icons/phone.svg'
import { ReactComponent as email } from '../../assets/icons/email.svg'
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg'
import { ReactComponent as twitter } from '../../assets/icons/twitter.svg'
import { ReactComponent as insta } from '../../assets/icons/insta.svg'
import { ReactComponent as linkedin } from '../../assets/icons/in.svg'
import { ReactComponent as logo } from '../../assets/icons/logo.svg'
import { ReactComponent as down } from '../../assets/icons/down.svg'

const Container = styled.div`
  width: 100%;
  height: 435px;
  background-color: var(--primaryColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`

const Wrapper = styled.div`
/* border: 1px solid red; */
  max-width: 1340px;
  width: 100%;
  padding: 5px 0px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 40px;
`
Wrapper.Item = styled.div`
    /* border: 1px solid blue; */
  .sub-title{
    color: #ffffff;
    margin-bottom: 32px;
  }
`
const Left = styled.div`
  position: relative;
  left: 115px;
`

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
`
List.Icon = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  .icon_link{
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #69696955;
    transition-duration: 1s;
    border-radius: 3px;
    &:hover{
      background-color:#253C4F ;
    }
  }
`

Wrapper.Des = styled.div`
    .small-description{
    width: 256px;
    color: #ffffff;
    cursor: pointer;
    transition-duration: 0.5s;
    &:hover{
      color:  #696969;
    }
  }
`

const Icon = styled.img``

Icon.Locatsia = styled(locatsia)`
  margin-bottom: 10px;
`
Icon.Phone = styled(phone)`
  margin-bottom: 10px;
`
Icon.Email = styled(email)`
  margin-bottom: 10px;
`
Icon.Facebook = styled(facebook)``

Icon.Twtter = styled(twitter)``

Icon.Instagram = styled(insta)``

Icon.LinkedIn = styled(linkedin)``

const FooterBottom = styled.div`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Bottom = styled.div`
    max-width: 1340px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
`
Bottom.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px ;
  .small-description{
    color: #ffffff;
    margin-top: 10px;
  }
`

Icon.Logo = styled(logo)``
Icon.Down = styled(down)``

export {Container,Wrapper,List,Icon,Left,FooterBottom,Bottom}