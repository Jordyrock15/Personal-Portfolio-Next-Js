import styled from 'styled-components';
import Image from 'next/image';

export default function TopComponent() {
	return (
		<Container>
			<TitleContainer>
				<H2>
					<Span>Hi</Span>, I'm
				</H2>
				<H1>Jordan Barrand.</H1>
				<H2>
					&#60; Web <Span>Developer</Span> /&#62;
				</H2>

				<Button bg_color='#0D6EFF' color='#FCFCFC'>
					Get In Touch
				</Button>
				<Button bg_color='#FCFCFC' color='#0D6EFF' margin_left='1rem'>
					My Work
				</Button>
			</TitleContainer>
			<Image src='/navbar_logo.svg' height={500} width={500} />
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
`;

const TitleContainer = styled.div`
	color: #fcfcfc;
	width: 30rem;
	font-family: 'Montserrat', sans-serif;
`;

const Span = styled.span`
	color: #0d6eff;
`;

const H1 = styled.h1`
	font-size: 5rem;
	line-height: 4rem;
	font-weight: bold;
`;

const H2 = styled.h2`
	font-size: 2.5rem;
	position: relative;
	top: ${(props) => (props.down ? props.down : 0)};
	font-weight: bold;
`;

const Button = styled.button`
	font-family: 'Montserrat', sans-serif;
	background-color: ${(props) => props.bg_color};
	font-weight: bold;
	font-size: 1rem;
	margin-top: 1.5rem;
	margin-bottom: 1rem;
	margin-left: ${(props) => props.margin_left};
	border-radius: 0.5rem;
	padding: 1rem 0;
	width: 11rem;
	outline: none;
	border: none;
	color: ${(props) => props.color};
`;
