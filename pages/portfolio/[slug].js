import Layout from '../../components/Layout';
import fetchFromStrapi from '../../lib/service';
import Image from 'next/image';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkToc from 'remark-toc';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import gfm from 'remark-gfm';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { BorderAnimation } from '../../utils/animations';

export default function PortfolioItem({ portfolioArray }) {
	const [indexNumber, setIndexNumber] = useState(null);

	return (
		<Layout>
			<Container variants={BorderAnimation} animate='show' initial='hidden'>
				<H1>{portfolioArray.Headline}</H1>
				<Image
					src={`${portfolioArray.image.formats.large.url}`}
					width={portfolioArray.image.formats.large.width}
					height={portfolioArray.image.formats.large.height}
				/>
				<DescContainer>
					<ReactMarkdown
						remarkPlugins={[remarkToc, gfm]}
						rehypePlugins={[rehypeRaw, rehypeSanitize]}
					>
						{portfolioArray.content}
					</ReactMarkdown>
				</DescContainer>
			</Container>

			<H2>Screenshots</H2>
			<ScreenshotContainer>
				{portfolioArray.Screenshots.map((screenshot, index) => (
					<Image
						src={`${screenshot.formats.thumbnail.url}`}
						width={screenshot.formats.thumbnail.width}
						height={screenshot.formats.thumbnail.height}
						onClick={() => setIndexNumber(index)}
						key={screenshot.formats.thumbnail.url}
					/>
				))}
			</ScreenshotContainer>
			{indexNumber !== null && (
				<ImageContainer onClick={() => setIndexNumber(null)}>
					{console.log(indexNumber)}
					<ImageBorder>
						<Image
							src={`${portfolioArray.Screenshots[indexNumber].formats.large.url}`}
							width={portfolioArray.Screenshots[indexNumber].formats.large.width}
							height={portfolioArray.Screenshots[indexNumber].formats.large.height}
							className='ModalImage'
						/>
						<ModalClose onClick={() => setIndexNumber(null)}>Close</ModalClose>
					</ImageBorder>
				</ImageContainer>
			)}

			<ButtonContainer>
				{portfolioArray.LiveWebsite !== null && (
					<Button color='#fcfcfc' bg='#0d6eff'>
						<a href={`${portfolioArray.LiveWebsite}`} target='_blank'>
							Live Website
						</a>
					</Button>
				)}

				{portfolioArray.SourceCode !== null && (
					<Button color='#0d6eff' bg='#fcfcfc' ml='1rem'>
						<a href={`${portfolioArray.SourceCode}`} target='_blank'>
							Source Code
						</a>
					</Button>
				)}
			</ButtonContainer>
		</Layout>
	);
}

const Container = styled(motion.div)`
	color: #fcfcfc;
`;

const ImageContainer = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.5);
	width: 100vw;
	height: 100vh;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ImageBorder = styled.div`
	margin-left: 3rem;
	margin-right: 3rem;
	position: relative;
`;

const ScreenshotContainer = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	cursor: pointer;
`;

const H1 = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-size: 3rem;
	margin-bottom: 2rem;
	margin-top: 2rem;

	@media (max-width: 770px) {
		font-size: 2rem;
	}
`;

const ModalClose = styled.h1`
	color: #fcfcfc;
	position: absolute;
	top: 3%;
	right: 3%;
	font-size: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	padding-bottom: 3px;
	padding-right: 1rem;
	padding-left: 1rem;
	border-radius: 5px;
	background: #ff0000;
`;

const H2 = styled.h2`
	margin-top: 2rem;
	color: #fcfcfc;
`;

const DescContainer = styled.div`
	font-family: 'Open Sans', sans-serif;
	margin-top: 2rem;
	font-size: 1rem;

	@media (max-width: 400px) {
		font-size: 0.8rem;
	}
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
