import styled  from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .title{
    margin-top: 64px;
  }
`
const Result = styled.div`
  width: 100%;
  padding: 0 130px;
  margin: 70px 0px 16px 0px;
  max-width: 1400px;
  color: #0D263B;
`

const Wrapper = styled.div`
  /* border: 2px solid red; */
  display: flex;
  max-width: 1440px;
  width: 100%;
  flex-wrap: wrap; 
  gap: 20px;
`
export {Container,Result,Wrapper}