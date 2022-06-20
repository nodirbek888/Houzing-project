
import React,{useRef} from 'react'
// import Card from '../../Card'
import { Carousel, Container,Icon,Wrapper,Card ,UserName,Img} from './style'
import 'react-alice-carousel/lib/alice-carousel.css';
import User from '../../../assets/imgs/no_user.png'


const Testimonials = () => {
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
    <Card className='small-description' onDragStart={handleDragStart} role="presentation">
        “ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “ 
      <UserName>
        <Img src={User}/>
        <h1 className='sub-title'>Marvin McKinney</h1>
        <p className='description'>Designer</p>
      </UserName>
      </Card>,
    <Card className='small-description' onDragStart={handleDragStart} role="presentation">
        “ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “ 
      <UserName>
        <Img src={User}/>
        <h1 className='sub-title'>Marvin McKinney</h1>
        <p className='description'>Designer</p>
      </UserName>
      </Card>,
    <Card className='small-description' onDragStart={handleDragStart} role="presentation">
        “ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “ 
      <UserName>
        <Img src={User}/>
        <h1 className='sub-title'>Marvin McKinney</h1>
        <p className='description'>Designer</p>
      </UserName>
      </Card>,
    <Card className='small-description' onDragStart={handleDragStart} role="presentation">
        “ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “ 
      <UserName>
        <Img src={User}/>
        <h1 className='sub-title'>Marvin McKinney</h1>
        <p className='description'>Designer</p>
      </UserName>
      </Card>
  ]
  return (
    <Container >
        <h1 className='title'>Testimonials</h1>
        <p className='description text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
        <Wrapper>
          <Icon.Left  onClick={()=>ref.current.slidePrev()}/>
          <Icon.Right onClick={()=>ref.current.slideNext()}/>
        <Carousel keyboardNavigation={true} disableButtonsControls={true} ref={ref} mouseTracking infinite={true} responsive={width} controlsStrategy="alternate" items={items}/>
        </Wrapper>
    </Container>
  )
}

export default Testimonials