import AboutMe from '../components/AboutMe';
import CardSection from '../components/CardSection';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import TopComponent from '../components/TopComponent';
import styled from 'styled-components';
import { scrollReveal, scrollRevealRight } from '../utils/animations';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Home() {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('show');
		}
	}, [controls, inView]);
	return (
		<Layout>
			<TopComponent />
			<H1 variants={scrollReveal} animate='show' initial='hidden'>
				&#60;&#62;
			</H1>
			<AboutMe />
			<CardSection />

			<H1 variants={scrollRevealRight} ref={ref} animate={controls} initial='hidden'>
				&#60;/&#62;
			</H1>

			<Contact />
		</Layout>
	);
}

const H1 = styled(motion.h1)`
	font-size: 4rem;
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
	color: #fcfcfc;
	margin-top: 11rem;

	@media (max-width: 730px) {
		display: none;
	}
`;
