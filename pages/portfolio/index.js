import Layout from '../../components/Layout';
import styled from 'styled-components';
import PortfolioCard from '../../components/PortfolioCard';
const { PersonalData } = require('../../Data/DummyData.json');
import fetchFromStrapi from '../../lib/service';
import Link from 'next/link';

export default function Portfolio({ portfolioItems }) {
	console.log(portfolioItems);
	return (
		<Layout>
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
		</Layout>
	);
}

export async function getStaticProps() {
	const portfolioItems = await fetchFromStrapi('portfolios');
	return {
		props: { portfolioItems },
		revalidate: 1,
	};
}

const CardContainer = styled.div`
	display: flex;
	margin-bottom: 5rem;
	flex-wrap: wrap;
`;

const H1 = styled.div`
	font-family: 'Montserrat', sans-serif;
	font-weight: bold;
	color: #fcfcfc;
	font-size: 3rem;
	margin-bottom: 1rem;
`;
