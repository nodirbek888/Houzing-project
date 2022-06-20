import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    margin-top: 100px;
    position: relative;
`

const Wrapper = styled.div`
    width: 100%;
    height: 571px;
    position: absolute;
    top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .wrapper_title{
        color: #ffffff;
        width: 567px;
        margin-bottom: 50px;
        font-style: normal;
        line-height: 36px;
        user-select: none;
    }
`

const Img = styled.img`
    width: 100%;
    height: 571px;
    filter: brightness(40%);
`
export {Container,Img,Wrapper}