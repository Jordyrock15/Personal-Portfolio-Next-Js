import Layout from '../../components/Layout';
import fetchFromStrapi from '../../lib/service';
import Image from 'next/image';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export default function PortfolioItem({ portfolioArray, teamPortfolioItem }) {
	console.log(teamPortfolioItem);

	return (
		<Layout>
			<Container>
				<H1>{portfolioArray.Headline}</H1>
				<Image
					src={`${portfolioArray.image.formats.large.url}`}
					width={portfolioArray.image.formats.large.width}
					height={portfolioArray.image.formats.large.height}
				/>
				<DescContainer>
					<ReactMarkdown>{portfolioArray.content}</ReactMarkdown>
				</DescContainer>
			</Container>
			<ButtonContainer>
				<Button color='#fcfcfc' bg='#0d6eff'>
					Live Website
				</Button>
				<Button color='#0d6eff' bg='#fcfcfc' ml='1rem'>
					Source Code
				</Button>
			</ButtonContainer>
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
	margin-top: 2rem;
`;

const DescContainer = styled.div`
	font-family: 'Open Sans', sans-serif;
	margin-top: 2rem;
`;

const ButtonContainer = styled.div`
	display: flex;
	margin-top: 2rem;
`;

const Button = styled.button`
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	background: ${(props) => (props.bg ? props.bg : '')};
	outline: none;
	border: none;
	color: ${(props) => (props.color ? props.color : '')};
	padding: 5px 15px;
	border-radius: 8px;
	bottom: 10px;
	cursor: pointer;
	margin-left: ${(props) => (props.ml ? props.ml : '')};
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
