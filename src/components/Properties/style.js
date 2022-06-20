import styled  from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  max-width: 1300px; 
  width: 100%;
  gap: 40px;
  display: flex;
  justify-content: space-between;
  /* border: 2px solid red; */
  flex-wrap: wrap;
`

const CardWrapper = styled.div``
export {Container,Result,Wrapper,CardWrapper}