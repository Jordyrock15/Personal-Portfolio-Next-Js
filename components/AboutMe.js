import styled from 'styled-components';
import { scrollReveal } from '../utils/animations';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function AboutMe() {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('show');
		}
	}, [controls, inView]);
	return (
		<Container>
			<TextContainer variants={scrollReveal} ref={ref} animate={controls} initial='hidden'>
				<H2>&#60; Get to know me /&#62;</H2>
				<P>
					Hey! I'm Jordan, a 20 year old from the U.K, who is currently aspiring to be a
					Web Developer / Software Engineer. My goal is to solve problems for people who
					can't and to create products that make life easier.
				</P>
			</TextContainer>
		</Container>
	);
}

const Container = styled.div`
	color: #fcfcfc;
	margin-top: 6rem;
`;

const TextContainer = styled(motion.div)`
	margin-left: 4rem;

	@media (max-width: 730px) {
		margin-left: 0;
	}
`;

const H2 = styled.h2`
	font-size: 2.5rem;
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;

	@media (max-width: 630px) {
		font-size: 1.7rem;
		margin-bottom: 0.5rem;
	}

	@media (max-width: 350px) {
		font-size: 1.6rem;
	}

	@media (max-width: 330px) {
		font-size: 1.5rem;
	}
`;

const P = styled.p`
	font-size: 1.2rem;
	font-weight: normal;
	font-family: 'Open Sans', sans-serif;

	margin-top: 0.5rem;
	@media (max-width: 630px) {
		font-size: 1rem;
	}
`;
