import styled  from "styled-components";
import AliceCarousel from 'react-alice-carousel';

import { ReactComponent as LeftArrow} from '../../../assets/icons/leftArrow.svg'
import { ReactComponent as RightArrow} from '../../../assets/icons/rightArrow.svg'
import { ReactComponent as house} from '../../../assets/icons/category_home.svg'
import { ReactComponent as apartment} from '../../../assets/icons/apartment.svg'
import { ReactComponent as office} from '../../../assets/icons/office.svg'
import { ReactComponent as villa} from '../../../assets/icons/villa.svg'


const Card = styled.div`
		position: relative;
		left: 55px;
		/* border: 2px solid red; */
	.card_text{
		margin-top: 20px;
		color: white;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 28px;
		text-align: center;
	}
`
const Imgs = styled.img`
  filter: brightness(70%);

`

const Container = styled.div`
    margin-top:  100px;
    width: 100%;
    .text-center{
        text-align: center;
    }
`;
const Wrapper = styled.div`
		margin: 32px 0px;
    width: 100%;
    position: relative;
    height: fit-content;
		display: flex;
		align-items: center;
		justify-content: center;
    .alice-carousel{
        width: 1410px;
				/* border: 1px solid red; */
    }
`
const Carousel = styled(AliceCarousel)`
    display: flex;
    max-width: 1440px;
    width: 100%;
`;

const Icon = styled.div``;
Icon.Left = styled(LeftArrow)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 47%;
	left: 0px;
	transform: translate(100%, -50%);
	width: 45px;
	height: 45px;
	padding: 12px;
	color: white;
	background: white;
	padding: 12px;
	opacity: 0.5;
	border-radius: 50%;
	z-index: 999;
	cursor: pointer;
    border: 1px solid #E6E9EC;
    -webkit-box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
	:hover {
		opacity: 0.77;
	}
	& path {
		fill: #0d263b;
	}
`;
Icon.Right = styled(RightArrow)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 46%;
	right: 0;
	transform: translate(-100%, -40%);
	width: 45px;
	height: 45px;
	padding: 12px;
	color: white;
	background: white;
	padding: 12px;
	opacity: 0.5;
	border-radius: 50%;
	z-index: 999;
	cursor: pointer;
    -webkit-box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 11px 2px rgba(34, 60, 80, 0.2);
        border: 1px solid #E6E9EC;
	:hover {
		opacity: 0.97;
	}
	& path {
		fill: #0d263b;
	}
`;


Icon.House = styled(house)``
Icon.Apartment = styled(apartment)``
Icon.Office = styled(office)``
Icon.Villa = styled(villa)``
const Border = styled.div`
		position: absolute;
		display: flex;
		left: 110px;
		z-index: 1000;
		top: 33%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
`

export {Container,Carousel,Wrapper,Icon,Card,Imgs,Border}