import React from 'react'
import {Container,Wrapper,List,Icon,Left,FooterBottom,Bottom} from './style'
import Botton from '../Generic/Button/index'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Item>
          <h1 className='sub-title'>Contact Us</h1>
            <Wrapper.Des>
              <List>
                <span>
                  <Icon.Locatsia/>
                </span>
                <p className='small-description'>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
              </List>
              <List>
                <span>
                  <Icon.Phone/>
                </span>
                <p className='small-description'>123 456 7890</p>
              </List>
              <List>
                <span>
                  <Icon.Email/>
                </span>
                <p className='small-description'>support@houzing.com</p>
              </List>
              <List>
                <List.Icon>
                    <a className='icon_link' href="https://faceook.com">
                  <Icon.Facebook/>
                    </a>
                    <a className='icon_link' href="https://twitter.com">
                  <Icon.Twtter/>
                    </a>
                    <a className='icon_link' href="https://instagram.com">
                  <Icon.Instagram/>
                    </a>
                    <a className='icon_link' href="https://LinkedIn.com">
                  <Icon.LinkedIn/>
                    </a>
                </List.Icon>
              </List>
            </Wrapper.Des>
        </Wrapper.Item>

        <Wrapper.Item>
        <h1 className='sub-title'>Discover</h1>
        <Wrapper.Des>
          <p className='small-description'>Chicago</p>
          <p className='small-description'>Los Angeles</p>
          <p className='small-description'>Miami</p>
          <p className='small-description'>New York</p>
          </Wrapper.Des>
        </Wrapper.Item>

        <Wrapper.Item>
        <h1 className='sub-title'>Lists by Category</h1>
        <Wrapper.Des>
          <p className='small-description'>Apartments</p>
          <p className='small-description'>Condos</p>
          <p className='small-description'>Houses</p>
          <p className='small-description'>Offices</p>
          <p className='small-description'>Retail</p>
          <p className='small-description'>Villas</p>
          </Wrapper.Des>
        </Wrapper.Item>

        <Left>
        <Wrapper.Item>
        <h1 className='sub-title'>Lists by Category</h1>
        <Wrapper.Des>
          <p className='small-description'>About Us</p>
          <p className='small-description'>Terms & Conditions</p>
          <p className='small-description'>Support Center</p>
          <p className='small-description'>Support Center</p>
          </Wrapper.Des>
        </Wrapper.Item>
        </Left>
      </Wrapper>
      <FooterBottom>
        <Bottom>
          <Icon.Logo/>
          <Bottom.Item >
            <p className='small-description'>Copyright © 2021 CreativeLayers. All Right Reserved.</p>
            <Botton width={'45px'} height={'45px'} type={'primary'}>
              <Icon.Down/>
            </Botton>
          </Bottom.Item>
        </Bottom>
      </FooterBottom>
    </Container>
  )
}

export default Footer