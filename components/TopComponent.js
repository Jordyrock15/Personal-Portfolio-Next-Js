import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import useWindowDimensions from '../Hooks/useWindowDimensions';
import { motion } from 'framer-motion';
import { BorderAnimation, BorderAnimationChildren, SlideInLeft } from '../utils/animations';

export default function TopComponent() {
	const { height, width } = useWindowDimensions();

	return (
		<Container variants={BorderAnimation} animate='show' initial='hidden'>
			<Hide>
				<TitleContainer>
					<H2 variants={BorderAnimationChildren}>
						<Span>Hi</Span>, I'm
					</H2>
					<H1 variants={BorderAnimationChildren}>Jordan Barrand.</H1>
					<H2 mb='1rem' variants={BorderAnimationChildren}>
						&#60; Web <Span>Developer</Span> /&#62;
					</H2>

					<ButtonContainer variants={BorderAnimationChildren}>
						<Button bg_color='#0D6EFF' color='#FCFCFC'>
							<a href='mailto:Jordan.Barrand@outlook.com'>Get In Touch</a>
						</Button>
						<Button bg_color='#FCFCFC' color='#0D6EFF' margin_left='1rem'>
							<Link href='/portfolio'>
								<a>My Work</a>
							</Link>
						</Button>
					</ButtonContainer>
				</TitleContainer>
			</Hide>
			{width > 990 && (
				<Image src='/navbar_logo.svg' height={500} width={500} layout='fixed' />
			)}
		</Container>
	);
}

const Container = styled(motion.div)`
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

	@media (max-width: 990px) {
		margin-top: 5rem;
	}

	@media (max-width: 700px) {
		margin-top: 3rem;
	}
`;

const TitleContainer = styled(motion.div)`
	color: #fcfcfc;
	max-width: 32rem;

	font-family: 'Montserrat', sans-serif;
`;

const Hide = styled.div`
	overflow: hidden;
`;

const Span = styled.span`
	color: #0d6eff;
`;

const H1 = styled(motion.h1)`
	padding-left: 6rem;
	font-size: 5rem;
	line-height: 4rem;
	font-weight: bold;

	@media (max-width: 1370px) {
		font-size: 4rem;
	}

	@media (max-width: 1130px) {
		padding-left: 0;
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
		font-size: 3.7rem;
	}

	@media (max-width: 340px) {
		font-size: 3.6rem;
	}
`;

const H2 = styled(motion.h2)`
	font-size: 2.5rem;
	padding-left: 6rem;
	position: relative;
	top: ${(props) => (props.down ? props.down : 0)};
	font-weight: bold;
	margin-bottom: ${(props) => (props.mb ? props.mb : 0)};

	@media (max-width: 1370px) {
		font-size: 2rem;
	}

	@media (max-width: 1130px) {
		padding-left: 0;
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

const ButtonContainer = styled(motion.div)`
	padding-left: 6rem;
	display: flex;
	@media (max-width: 1250px) {
		flex-direction: column;
	}

	@media (max-width: 1130px) {
		padding-left: 0;
	}

	@media (max-width: 990px) {
		flex-direction: row;
	}

	@media (max-width: 430px) {
		flex-direction: column;
	}
`;
