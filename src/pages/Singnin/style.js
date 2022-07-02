import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
` 

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 580px;
  height: 376px;
  margin: 64px 0px;
  background-color: #ffffff;
  border:  1px solid #E6E9EC;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  span{
    color: var(--ativeColor);
    text-decoration: underline;
    cursor: pointer;
    font-size: 16px;
  }
`

export {Container,Wrapper}