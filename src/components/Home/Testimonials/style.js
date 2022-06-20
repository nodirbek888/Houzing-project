import styled from "styled-components";
import AliceCarousel from 'react-alice-carousel';
import { ReactComponent as LeftArrow} from '../../../assets/icons/leftArrow.svg'
import { ReactComponent as RightArrow} from '../../../assets/icons/rightArrow.svg'


const Container = styled.div`
    margin-top:  100px;
    width: 100%;
	height: 520px;
	background-color: #F5F7FC;
	padding-top: 48px;
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
	justify-content: center;
	align-items: center;
    .alice-carousel{
		max-width:1440px;
		width: 100%;
    }
	.alice-carousel__stage-item{
		margin-top: 36px;
		height: 280px;
	}
	.alice-carousel__dots-item{
		display: none;
	}
`
const Carousel = styled(AliceCarousel)`
    display: flex;
    width: 1440px;
    /* width: 100%; */
    justify-content: space-between;
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

const Card = styled.div`
	background-color: #ffffff;
	width: 380px;
  	min-width: 280px;
	height: 197px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	left: 55px;
	padding: 40px 48px 61px 48px;
	box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
	border-radius: 3px;
`
const UserName = styled.div`
	position: absolute;
	top: 178px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Img = styled.img`
	width: 38px;
	height: 38px;
	border-radius: 50%;
	background: #FFFFFF;
	box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
	border: 1px solid #ffff;
`
export {Container,Carousel,Wrapper,Icon,Card,UserName,Img}