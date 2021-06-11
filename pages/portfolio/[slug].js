import Layout from '../../components/Layout';
import fetchFromStrapi from '../../lib/service';
import Image from 'next/image';
import styled from 'styled-components';

export default function PortfolioItem({ portfolioArray, teamPortfolioItem }) {
	console.log(teamPortfolioItem);
	console.log(portfolioArray.image[0].formats.thumbnail.url);
	return (
		<Layout>
			<Container>
				<H1>{portfolioArray.Headline}</H1>
				<Image
					src={`${portfolioArray.image[0].formats.large.url}`}
					width={portfolioArray.image[0].formats.large.width}
					height={portfolioArray.image[0].formats.large.height}
				/>
				<p>{portfolioArray.content}</p>
			</Container>
		</Layout>
	);
}

const Container = styled.div`
	color: #fcfcfc;
`;

const H1 = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-size: 3rem;
	margin-bottom: 2rem;
`;

export async function getStaticPaths() {
	let portfolios = await fetchFromStrapi('portfolios');
	let teamPortfolioItems = await fetchFromStrapi('team-portfolios');
	let coursePortfolioItems = await fetchFromStrapi('course-portfolios');
	let portfoliosArray = teamPortfolioItems.concat(portfolios, coursePortfolioItems);

	return {
		paths: portfoliosArray.map((portfolio) => ({
			params: {
				slug: portfolio.slug,
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const portfolio = await fetchFromStrapi(`portfolios?slug=${params.slug}`);
	const teamPortfolioItem = await fetchFromStrapi(`team-portfolios?slug=${params.slug}`);
	const coursePortfolioItem = await fetchFromStrapi(`course-portfolios?slug=${params.slug}`);
	const portfolioArray = portfolio.concat(teamPortfolioItem, coursePortfolioItem);
	return {
		props: { portfolioArray: portfolioArray[0] },
		revalidate: 1,
	};
}
