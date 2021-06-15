import Layout from '../../components/Layout';
import styled from 'styled-components';
import PortfolioCard from '../../components/PortfolioCard';

import fetchFromStrapi from '../../lib/service';
import { motion } from 'framer-motion';
import { BorderAnimation } from '../../utils/animations';

export default function Portfolio({ portfolioItems, teamPortfolioItems, coursePortfolioItems }) {
	return (
		<Layout>
			<Container variants={BorderAnimation} animate='show' initial='hidden'>
				<H1>Personal Projects</H1>
				<CardContainer>
					{portfolioItems.map((data) => (
						<PortfolioCard
							key={data.id}
							name={data.Headline}
							points={data.TechStack}
							slug={data.slug}
						/>
					))}
				</CardContainer>

				<H1>Team Projects</H1>
				<CardContainer>
					{teamPortfolioItems.map((data) => (
						<PortfolioCard
							key={data.id}
							name={data.Headline}
							points={data.TechStack}
							slug={data.slug}
						/>
					))}
				</CardContainer>

				<H1>Course Projects</H1>
				<CardContainer>
					{coursePortfolioItems.map((data) => (
						<PortfolioCard
							key={data.id}
							name={data.Headline}
							points={data.TechStack}
							slug={data.slug}
						/>
					))}
				</CardContainer>
			</Container>
		</Layout>
	);
}

export async function getStaticProps() {
	const portfolioItems = await fetchFromStrapi('portfolios');
	const teamPortfolioItems = await fetchFromStrapi('team-portfolios');
	const coursePortfolioItems = await fetchFromStrapi('course-portfolios');

	return {
		props: { portfolioItems, teamPortfolioItems, coursePortfolioItems },
		revalidate: 1,
	};
}

const Container = styled(motion.div)`
	@media (max-width: 700px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const CardContainer = styled.div`
	display: flex;
	margin-bottom: 5rem;
	flex-wrap: wrap;

	@media (max-width: 700px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const H1 = styled.div`
	font-family: 'Montserrat', sans-serif;
	font-weight: bold;
	color: #fcfcfc;
	font-size: 3rem;
	margin-bottom: 1rem;

	@media (max-width: 700px) {
		font-size: 2.5rem;
		margin-top: 2rem;
	}

	@media (max-width: 550px) {
		font-size: 2rem;
	}

	@media (max-width: 380px) {
		font-size: 1.8rem;
	}

	@media (max-width: 350px) {
		font-size: 1.7rem;
	}
`;
