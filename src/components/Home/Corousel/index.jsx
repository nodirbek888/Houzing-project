import React, {useRef} from 'react'
import { Container, Img,Icon,Wrapper,Icons, Title, Skyepr,Details, Footer,ImgWrapper} from './style'
import home1 from '../../../assets/imgs/home1.png'
import home2 from '../../../assets/imgs/home2.png'
import Button from '../../Generic/Button'

const Corousel = () => {
  const slider = useRef('click')
  return (
    <Wrapper>
    <Icon.Left onClick={()=> slider.current.prev()}/>
    <Icon.Right onClick={()=> slider.current.next()}/>
    <Container autoplay  ref={slider}>
    <ImgWrapper>
        <Img src={home1}/>
      <Skyepr>
      <Title>
        <h1 className='title des-title'>Skyper Pool Partment</h1>
        <p className='sub-title text-title'>112 Glenwood Ave Hyde Park, Boston, MA</p>
      </Title>
      <Details>
          <Details.Item>
            <Icons.Bed/>
            <p className='small-descriptiontitle icon_title'>bed</p>
          </Details.Item>
          <Details.Item>
            <Icons.Bath/>
            <p className='small-descriptiontitle icon_title'>Baths</p>
          </Details.Item>
          <Details.Item>
            <Icons.Car/>
            <p className='small-descriptiontitle icon_title'>Garage</p>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler/>
            <p className='small-descriptiontitle icon_title'>Sq Ft</p>
          </Details.Item>
        </Details>
        <Footer>
          <h1 className='footer-title'>$5,250/mo</h1>
          <Button width={'180px'}>Red more</Button>
        </Footer>
      </Skyepr>
    </ImgWrapper>
      
      <ImgWrapper>
        <Img src={home2}/>
      </ImgWrapper>

      <ImgWrapper>
        <Img src={home1}/>
      </ImgWrapper>

      <ImgWrapper>
        <Img src={home2 }/>
      </ImgWrapper>

    </Container>
    </Wrapper>
  )
}

export default Corousel