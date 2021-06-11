import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import fetchFromStrapi from '../../lib/service';
import styled from 'styled-components';

export default function BlogItem({ blog }) {
	return (
		<Layout>
			<Container>
				<h1>{blog.Headline}</h1>
				<h2>
					{blog.date} {blog.TypeOfBlog}
				</h2>
				<Image
					src={`${blog.image.formats.medium.url}`}
					width={blog.image.formats.medium.width}
					height={blog.image.formats.medium.height}
				/>
				<div>
					<ReactMarkdown>{blog.content}</ReactMarkdown>
				</div>
			</Container>
		</Layout>
	);
}

const Container = styled.div`
	color: #fcfcfc;
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
