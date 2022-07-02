import React, { useRef } from 'react'
import {Container,Wrapper} from './style'
import {Input,Button} from '../../components/Generic'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'


const SingIn = () => {
  const emailRef = useRef ('')
  const navigate = useNavigate()
  const pwRef = useRef('')
  const onSubmit = ()=>{
    console.log(emailRef.current.value);
    console.log(pwRef.current.value);
  }

  return (
    <Container>
      <Wrapper>
        <h1 className='title'>Sing in</h1>
        <Input ref={emailRef} placeholder={'Email'} type={'primary'}/>
        <Input ref={pwRef} placeholder={'password'} type={'primary'}/>
        <Button onClick={onSubmit} width={'100%'} type={'primary'}>Login</Button>
        <span onClick={()=> navigate('/singnup')}>create a new account</span>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default SingIn