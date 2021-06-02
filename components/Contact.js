import styled from 'styled-components';

export default function Contact() {
	return (
		<div>
			<Container>
				<H2>&#60; Contact /&#62;</H2>
				<TextContainer>
					<P>Need to get in touch?</P>
					<Button>Send An Email</Button>
				</TextContainer>
			</Container>
		</div>
	);
}

const H2 = styled.h2`
	font-size: 2.5rem;
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
	margin-bottom: 0.8rem;
`;

const Container = styled.div`
	color: #fcfcfc;
	margin-top: 10rem;
	margin-bottom: 4rem;
`;

const TextContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: normal;
	font-family: 'Open Sans', sans-serif;
`;

const P = styled.div`
	font-size: 1.2rem;
`;

const Button = styled.div`
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
	background: #0d6eff;
	padding: 10px 18px;
	border-radius: 5px;
	margin-left: 15px;
	cursor: pointer;
`;
