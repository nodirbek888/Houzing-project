import React from 'react'
import { Container, Details, Img, InfoWrapper,Icon, Test, Footer, PriceSection, OldPrice, Characters, IconWrapper, Fetured, ForSale, Owner } from './style'
import NoPhoto from '../../assets/imgs/no_photo.jpg'
import owner from '../../assets/imgs/no_user.png'
const Card = ({info}) => {
  return (
    <Test>
    <Container>
      <Img src={info?.attachments[0]?.imgPath || NoPhoto}/>
      <Fetured>Fetured</Fetured>
      <ForSale>For Sale</ForSale>
      <Owner src={info?.owner || owner}/>
      <InfoWrapper>
        <h1 style={{whiteSpace: 'nowrap', overflow:'hidden'}} className='sub-title'>{info?.description || 'New Apartment Nice Wiew'}</h1>
        <p className='small-description'>{info?.address || 'Quincy St, Brooklyn, NY, USA'}</p>
        <Details>
          <Details.Item>
            <Icon.Bed/>
            <p className='small-descriptiontitle'>{info?.houseDetails?.room || 0} bed</p>
          </Details.Item>
          <Details.Item>
            <Icon.Bath/>
            <p className='small-descriptiontitle'>{info?.houseDetails?.bath || 0} Baths</p>
          </Details.Item>
          <Details.Item>
            <Icon.Car/>
            <p className='small-descriptiontitle'>{info?.houseDetails?.garage || 0} Garage</p>
          </Details.Item>
          <Details.Item>
            <Icon.Ruler/>
            <p className='small-descriptiontitle'>{info?.houseDetails?.area || 0} Sq Ft</p>
          </Details.Item>
        </Details>
      </InfoWrapper>
      <Footer>
        <PriceSection>
          <OldPrice>{info?.oldPrice || '$2,800/mo'}</OldPrice>
            <span className='sub-title'>{`$${info?.price}` || '$7,500/mo'}</span>
        </PriceSection>
        <Characters>
          <Icon.Resize/>
          <IconWrapper>
          <Icon.Like/>
          </IconWrapper>
        </Characters>
      </Footer>
    </Container>
    </Test>
  )
}

export default Card