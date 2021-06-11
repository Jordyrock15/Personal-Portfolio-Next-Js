import Layout from '../../components/Layout';
import styled from 'styled-components';
import fetchFromStrapi from '../../lib/service';
import BlogCard from '../../components/BlogCard';

export default function Blog({ blogItems }) {
	console.log(blogItems);
	return (
		<Layout>
			<H1>Blog</H1>

			{blogItems.map((blogs) => (
				<BlogCard
					key={blogs.id}
					title={blogs.Headline}
					content={blogs.content}
					mainImage={blogs.image}
					blogType={blogs.TypeOfBlog}
					published={blogs.date}
					slug={blogs.slug}
				/>
			))}
		</Layout>
	);
}

const H1 = styled.div`
	font-family: 'Montserrat', sans-serif;
	font-weight: bold;
	color: #fcfcfc;
	font-size: 3rem;
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
