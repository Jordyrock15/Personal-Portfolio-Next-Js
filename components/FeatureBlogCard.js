import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export default function FeatureBlogCard({ blog }) {
	console.log(blog);
	return (
		<Container>
			<Image
				src={`${blog.image.formats.medium.url}`}
				width={blog.image.formats.medium.width}
				height={blog.image.formats.medium.height}
			/>
			<TextContainer>
				<TagContainer>
					<Tag>{blog.TypeOfBlog}</Tag>
					<Date>{blog.date}</Date>
				</TagContainer>

				<H1>{blog.Headline}</H1>
				<Description>{blog.BlogDescription}</Description>
				<Link as={`/blog/${blog.slug}`} href='/blog/[id]'>
					<Button>Read More</Button>
				</Link>
			</TextContainer>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	margin-bottom: 4rem;

	@media (max-width: 1175px) {
		flex-direction: column;
	}
`;

const TagContainer = styled.div`
	color: #fcfcfc;
	display: flex;
	align-items: center;

	font-family: 'Open Sans', sans-serif;
`;

const Tag = styled.h2`
	font-size: 0.8rem;
	background: #fcfcfc;
	color: #0d6eff;
	padding: 5px 10px;
	border-radius: 10px;
`;

const Date = styled.h2`
	font-size: 0.8rem;
	margin-left: 1rem;
	color: #0d6eff;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-left: 4rem;
	width: 20rem;

	@media (max-width: 1230px) {
		margin-left: 2rem;
	}
`;

const H1 = styled.h1`
	color: #fcfcfc;
	font-family: 'Montserrat', sans-serif;
	font-size: 2rem;
	font-weight: bold;
`;

const Description = styled.p`
	color: #fcfcfc;
	font-family: 'Open Sans', sans-serif;
	font-size: 0.8rem;
`;

const Button = styled.button`
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	background: #0d6eff;
	outline: none;
	border: none;
	color: #fcfcfc;
	padding: 5px 15px;
	border-radius: 8px;
	bottom: 10px;
	cursor: pointer;
	width: 7rem;
`;
