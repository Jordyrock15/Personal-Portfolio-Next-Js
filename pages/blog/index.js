import Layout from '../../components/Layout';
import styled from 'styled-components';
import fetchFromStrapi from '../../lib/service';
import BlogCard from '../../components/BlogCard';
import FeatureBlogCard from '../../components/FeatureBlogCard';

export default function Blog({ blogItems }) {
	console.log(blogItems);

	return (
		<Layout>
			<H1>The Blog</H1>

			<FeatureBlogCard blog={blogItems[blogItems.length - 1]} />

			{blogItems.map((blogs) => (
				<BlogCard blogs={blogs} key={blogs.id} />
			))}
		</Layout>
	);
}

const H1 = styled.div`
	font-family: 'Montserrat', sans-serif;
	font-weight: bold;
	color: #fcfcfc;
	font-size: 4rem;
	margin-bottom: 2rem;
	margin-top: 2rem;
`;

export async function getStaticProps() {
	const blogItems = await fetchFromStrapi('blogs');

	return {
		props: { blogItems },
		revalidate: 1,
	};
}
