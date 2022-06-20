import React from 'react'
import {Container,Img,Wrapper} from './style'
import Home from '../../../assets/imgs/home2.png'
import Button from '../../Generic/Button'
const Vermont = () => {
  return (
    <Container>
        <Img src={Home}/>
        <Wrapper>
            <h1 className='title wrapper_title'>Vermont Farmhouse With Antique Jail Isthe Week's Most Popular Home</h1>
            <Button type={'primary'} width={'180px'}>Read more</Button>
        </Wrapper>
    </Container>
  )
}

export default Vermont