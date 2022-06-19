
import React,{useRef} from 'react'
import { Carousel, Container,Icon,Wrapper ,Card,Imgs,Border} from './style'
import 'react-alice-carousel/lib/alice-carousel.css';
import House1 from '../../../assets/imgs/category_house1.png'
import House2 from '../../../assets/imgs/category_house2.png'
import House3 from '../../../assets/imgs/category_house3.png'

const Recommended = () => {
  const ref = useRef('click')
  const handleDragStart = (e) => e.preventDefault();
 const width =  {
    0: {
        items: 1,
    },
    600:{
      items:2, 
     },
    970:{
     items:3, 
    },
    1024: {
        items: 4
    }

  }
  const items = [
    // <Card src={House1} onDragStart={handleDragStart} role="presentation" />,
    // <Card src={House2} onDragStart={handleDragStart} role="presentation" />,
    // <Card src={House3} onDragStart={handleDragStart} role="presentation" />,
    // <Card src={House1} onDragStart={handleDragStart} role="presentation" />,
    // <Card src={House2} onDragStart={handleDragStart} role="presentation" />,

    <Card onDragStart={handleDragStart} role="presentation" >
      <Border>
      <Icon.House/>   
      <p className='card_text'>House</p>
      </Border>
      <Imgs src={House1}/>
    </Card>,
    <Card onDragStart={handleDragStart} role="presentation" >
      <Border>
      <Icon.Office/>
      <p className='card_text'>Apartm</p>
      </Border>
      <Imgs src={House2}/>
    </Card>,
    <Card onDragStart={handleDragStart} role="presentation" >
      <Border>
      <Icon.Villa/>
      <p className='card_text'>Office</p>
      </Border>
      <Imgs src={House3}/>
    </Card>,
    <Card onDragStart={handleDragStart} role="presentation" >
      <Border>
      <Icon.House/>   
      <p className='card_text'>Villa</p>
      </Border>
      <Imgs src={House1}/>
    </Card>,
    <Card onDragStart={handleDragStart} role="presentation" >
      <Border>
      <Icon.Office/>
      <p className='card_text'>House</p>
      </Border>
      <Imgs src={House2}/>
    </Card>,
  ]
  return (
    <Container >
        <h1 className='title'>Category</h1>
        <p className='description text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
        <Wrapper>
          <Icon.Left onClick={()=>ref.current.slidePrev()}/>
          <Icon.Right onClick={()=>ref.current.slideNext()}/>
          <Carousel keyboardNavigation={true} disableButtonsControls={true} ref={ref} mouseTracking infinite={true} responsive={width} controlsStrategy="alternate" items={items}/>
        </Wrapper>
    </Container>
  )
}

export default Recommended