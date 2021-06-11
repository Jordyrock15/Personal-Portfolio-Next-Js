import Layout from '../../components/Layout';
import fetchFromStrapi from '../../lib/service';

export default function PortfolioItem({ portfolio }) {
	return (
		<Layout>
			<h1>{portfolio.Headline}</h1>
			<p>{portfolio.content}</p>
		</Layout>
	);
}
export async function getStaticPaths() {
	const portfolios = await fetchFromStrapi('portfolios');
	return {
		paths: portfolios.map((portfolio) => ({
			params: {
				slug: portfolio.slug,
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const portfolio = await fetchFromStrapi(`portfolios?slug=${params.slug}`);
	return {
		props: { portfolio: portfolio[0] },
		revalidate: 1,
	};
}
