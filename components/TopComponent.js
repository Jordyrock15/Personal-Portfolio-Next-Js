import styled from 'styled-components';

import Image from 'next/image';
import useWindowDimensions from '../Hooks/useWindowDimensions';

export default function TopComponent() {
	const { height, width } = useWindowDimensions();
	console.log(width);

	return (
		<Container>
			<TitleContainer>
				<H2>
					<Span>Hi</Span>, I'm
				</H2>
				<H1>Jordan Barrand.</H1>
				<H2 mb='1rem'>
					&#60; Web <Span>Developer</Span> /&#62;
				</H2>

				<ButtonContainer>
					<Button bg_color='#0D6EFF' color='#FCFCFC'>
						Get In Touch
					</Button>
					<Button bg_color='#FCFCFC' color='#0D6EFF' margin_left='1rem'>
						My Work
					</Button>
				</ButtonContainer>
			</TitleContainer>
			{width > 990 && (
				<Image src='/navbar_logo.svg' height={500} width={500} layout='fixed' />
			)}
		</Container>
	);
}

const Container = styled.div`
	padding-left: 6rem;
	border-left: 8px solid #0d6eff;
	font-family: 'Montserrat', sans-serif;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 8rem;

	@media (max-width: 1130px) {
		border: none;
		padding-left: 0;
	}

	@media (max-width: 1130px) {
		justify-content: center;
		align-items: center;
	}
`;

const ImageRemove = styled.div`
	@media (max-width: 990px) {
		display: none;
	}
`;

const TitleContainer = styled.div`
	color: #fcfcfc;
	max-width: 32rem;
	font-family: 'Montserrat', sans-serif;
`;

const Span = styled.span`
	color: #0d6eff;
`;

const H1 = styled.h1`
	font-size: 5rem;
	line-height: 4rem;
	font-weight: bold;

	@media (max-width: 1370px) {
		font-size: 4rem;
	}

	@media (max-width: 990px) {
		font-size: 6rem;
		line-height: 5rem;
	}

	@media (max-width: 730px) {
		font-size: 5rem;
		line-height: 4rem;
	}

	@media (max-width: 610px) {
		font-size: 4rem;
		line-height: 3.5rem;
	}
	@media (max-width: 400px) {
		font-size: 3.8rem;
	}
`;

const H2 = styled.h2`
	font-size: 2.5rem;
	position: relative;
	top: ${(props) => (props.down ? props.down : 0)};
	font-weight: bold;
	margin-bottom: ${(props) => (props.mb ? props.mb : 0)};

	@media (max-width: 1370px) {
		font-size: 2rem;
	}

	@media (max-width: 990px) {
		font-size: 3rem;
	}

	@media (max-width: 730px) {
		font-size: 2.5rem;
	}

	@media (max-width: 610px) {
		font-size: 2rem;
	}

	@media (max-width: 400px) {
		font-size: 1.8rem;
	}

	@media (max-width: 360px) {
		font-size: 1.6rem;
	}
`;

const Button = styled.button`
	font-family: 'Montserrat', sans-serif;
	background-color: ${(props) => props.bg_color};
	font-weight: bold;
	font-size: 1rem;
	margin-bottom: 1rem;
	margin-left: ${(props) => props.margin_left};
	border-radius: 0.5rem;
	padding: 1rem 0;
	width: 11rem;
	outline: none;
	border: none;
	color: ${(props) => props.color};
	cursor: pointer;

	@media (max-width: 1250px) {
		margin-left: 0;
		margin-bottom: 0;
		margin-top: 0.5rem;
	}
	@media (max-width: 990px) {
		margin-left: ${(props) => props.margin_left};
	}
	@media (max-width: 430px) {
		margin-left: 0;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	@media (max-width: 1250px) {
		flex-direction: column;
	}

	@media (max-width: 990px) {
		flex-direction: row;
	}

	@media (max-width: 430px) {
		flex-direction: column;
	}
`;
