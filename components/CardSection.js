import Card from './Card';
import styled from 'styled-components';

const { Tech } = require('../Data/TechStackData.json');

import { scrollRevealChildren, scrollRevealRight } from '../utils/animations';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function CardSection() {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('show');
		}
	}, [controls, inView]);
	return (
		<Container>
			<H2 variants={scrollRevealRight} ref={ref} animate={controls} initial='hidden'>
				&#60; My Tools /&#62;
			</H2>
			<CardContainer>
				{Tech.map((data) => (
					<Card
						image1={data.screenshots[0].Image}
						image2={data.screenshots[1].Image}
						image3={data?.screenshots[2]?.Image}
						image1Width={data.screenshots[0].Width}
						image1Height={data.screenshots[0].Height}
						image2Width={data.screenshots[1].Width}
						image2Height={data.screenshots[1].Height}
						image3Width={data?.screenshots[2]?.Width}
						image3Height={data?.screenshots[2]?.Height}
						key={data.ID}
					/>
				))}
			</CardContainer>
		</Container>
	);
}

const Container = styled(motion.div)`
	margin-left: 4rem;
	margin-top: 5rem;
	@media (max-width: 730px) {
		margin-left: 0;
	}
`;

const CardContainer = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
`;

const H2 = styled(motion.h2)`
	color: #fcfcfc;
	font-size: 2.5rem;
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
	margin-bottom: 3rem;

	@media (max-width: 630px) {
		font-size: 1.7rem;
		margin-bottom: 1rem;
	}

	@media (max-width: 350px) {
		font-size: 1.6rem;
	}

	@media (max-width: 330px) {
		font-size: 1.5rem;
	}
`;
