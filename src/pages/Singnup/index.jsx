import React, { useRef } from 'react'
import {Container,Wrapper} from './style'
import {Input,Button} from '../../components/Generic'
import Footer from '../../components/Footer'

const Signup = () => {
  const emailRef = useRef ('')
  const pwRef = useRef('')
  return (
    <Container>
    <Wrapper>
      <h1 className='title'>Sing in</h1>
      <Input placeholder={'First name'} type={'primary'}/>
      <Input placeholder={'Last name'} type={'primary'}/>
      <Input placeholder={'Email'} type={'primary'}/>
      <Input placeholder={'Password'} type={'primary'}/>
      <Input placeholder={'Re-enter password'} type={'primary'}/>
      <Button width={'100%'} type={'primary'}>Login</Button>
    </Wrapper>
    <Footer/>
  </Container>
  )
}

export default Signup