import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export default function FeatureBlogCard({ blog }) {
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
	margin-bottom: 1.2rem;
	font-family: 'Open Sans', sans-serif;

	@media (max-width: 1175px) {
		margin-bottom: 1rem;
	}
`;

const Tag = styled.h2`
	font-size: 0.8rem;
	background: #fcfcfc;
	color: #0d6eff;
	padding: 5px 10px;
	border-radius: 10px;

	@media (max-width: 1175px) {
		font-size: 0.7rem;
	}
`;

const Date = styled.h2`
	font-size: 0.8rem;
	margin-left: 1rem;
	color: #0d6eff;

	@media (max-width: 1175px) {
		font-size: 0.7rem;
		margin-left: 0.8rem;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 4rem;
	width: 20rem;

	@media (max-width: 1230px) {
		margin-left: 2rem;
	}

	@media (max-width: 1175px) {
		width: 100%;
		margin-top: 1rem;
		margin-left: 0;
	}
`;

const H1 = styled.h1`
	color: #fcfcfc;
	font-family: 'Montserrat', sans-serif;
	font-size: 2rem;
	margin-bottom: 0.8rem;
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
	margin-top: 1rem;

	@media (max-width: 1175px) {
		margin-top: 1rem;
	}
`;
