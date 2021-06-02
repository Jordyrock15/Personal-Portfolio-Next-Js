import styled from 'styled-components';

export default function AboutMe() {
	return (
		<Container>
			<TextContainer>
				<H2>&#60; Get to know me /&#62;</H2>
				<P>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis erat pellentesque
					ornare cursus leo praesent facilisi aliquet sem. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Felis erat pellentesque ornare cursus leo praesent
					facilisi aliquet sem.
				</P>
			</TextContainer>
		</Container>
	);
}

const Container = styled.div`
	color: #fcfcfc;
	margin-top: 5rem;
`;

const H1 = styled.h1`
	font-size: 4rem;
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
`;

const TextContainer = styled.div`
	margin-left: 4rem;
	@media (max-width: 730px) {
		margin-left: 0;
	}
`;

const H2 = styled.h2`
	font-size: 2.5rem;
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
`;

const P = styled.p`
	font-size: 1.2rem;
	font-weight: normal;
	font-family: 'Open Sans', sans-serif;
`;
