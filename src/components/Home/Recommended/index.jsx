
import React,{useRef} from 'react'
import Card from '../../Card'
import { Carousel, Container,Icon,Wrapper } from './style'
import 'react-alice-carousel/lib/alice-carousel.css';


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
        items: 3
    }

  }
  const items = [
    <Card  onDragStart={handleDragStart} role="presentation" />,
    <Card  onDragStart={handleDragStart} role="presentation" />,
    <Card  onDragStart={handleDragStart} role="presentation" />,
    <Card  onDragStart={handleDragStart} role="presentation" />,
    <Card  onDragStart={handleDragStart} role="presentation" />,
  ]
  return (
    <Container >
        <h1 className='title'>Recommended</h1>
        <p className='description text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
        <Wrapper>
          <Icon.Left  onClick={()=>ref.current.slidePrev()}/>
          <Icon.Right onClick={()=>ref.current.slideNext()}/>
        <Carousel keyboardNavigation={true} disableButtonsControls={true} ref={ref} mouseTracking infinite={true} responsive={width} controlsStrategy="alternate" items={items}/>
        </Wrapper>
    </Container>
  )
}

export default Recommended