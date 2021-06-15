import Layout from '../../components/Layout';
import styled from 'styled-components';
import fetchFromStrapi from '../../lib/service';
import BlogCard from '../../components/BlogCard';
import FeatureBlogCard from '../../components/FeatureBlogCard';

export default function Blog({ blogItems }) {
	let blogArray = blogItems.slice(0, -1);

	return (
		<Layout>
			<H1>The Blog</H1>
			<H2>Featured</H2>
			<FeatureBlogCard blog={blogItems[blogItems.length - 1]} />

			<Line></Line>

			<BlogItemContainer>
				{blogArray.map((blogs) => (
					<BlogCard blogs={blogs} key={blogs.id} />
				))}
			</BlogItemContainer>
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

	@media (max-width: 900px) {
		font-size: 3rem;
	}

	@media (max-width: 490px) {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}
`;

const Line = styled.div`
	width: 100%;
	border-bottom: solid rgba(252, 252, 252, 0.3) 1px;
	margin-bottom: 3rem;
`;

const H2 = styled.div`
	font-family: 'Montserrat', sans-serif;
	font-weight: bold;
	color: #fcfcfc;
	font-size: 2rem;
	margin-bottom: 1rem;
	margin-top: 2rem;

	@media (max-width: 4900px) {
		font-size: 1.5rem;
		margin-top: 0;
	}
`;

const BlogItemContainer = styled.div`
	display: flex;
	display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
	display: -ms-flexbox; /* TWEENER - IE 10 */
	display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
	flex-wrap: wrap;
	flex-direction: column;

	@media (max-width: 1920px) {
		flex-direction: row;
	}
`;

export async function getStaticProps() {
	let blogItems = await fetchFromStrapi('blogs');

	return {
		props: { blogItems },
		revalidate: 1,
	};
}
