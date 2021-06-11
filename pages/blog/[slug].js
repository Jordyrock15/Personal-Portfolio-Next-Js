import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import fetchFromStrapi from '../../lib/service';
import styled from 'styled-components';

export default function BlogItem({ blog }) {
	return (
		<Layout>
			<Container>
				<H1>{blog.Headline}</H1>
				<H2>{blog.ShortHeadline}</H2>
				{/* <h3>
					{blog.date} {blog.TypeOfBlog}
				</h3> */}
				<Image
					src={`${blog.image.formats.large.url}`}
					width={blog.image.formats.large.width}
					height={blog.image.formats.large.height}
				/>
				<TextContainer>
					<ReactMarkdown children={blog.content}></ReactMarkdown>
				</TextContainer>
			</Container>
		</Layout>
	);
}

const Container = styled.div`
	color: #fcfcfc;
	margin-top: 2rem;
`;

const H1 = styled.h1`
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 3.5rem;
`;

const H2 = styled.h2`
	font-family: 'Montserrat', sans-serif;
	font-weight: normal;
	font-size: 2rem;
	margin-bottom: 2rem;
`;

const TextContainer = styled.div`
	font-family: 'Open Sans', sans-serif;
	margin-top: 2rem;
`;

export async function getStaticPaths() {
	const blogs = await fetchFromStrapi('blogs');

	return {
		paths: blogs.map((blog) => ({
			params: {
				slug: blog.slug,
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const blog = await fetchFromStrapi(`blogs?slug=${params.slug}`);

	return {
		props: { blog: blog[0] },
		revalidate: 1,
	};
}
