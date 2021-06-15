import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import useWindowDimensions from '../Hooks/useWindowDimensions';

export default function BlogCard({ blogs }) {
	const { height, width } = useWindowDimensions();

	console.log(width);

	return (
		<Container>
			<Image
				src={`${
					width <= 890 ? blogs.image.formats.small.url : blogs.image.formats.small.url
				}`}
				width={
					width <= 890 ? blogs.image.formats.small.width : blogs.image.formats.small.width
				}
				height={
					width <= 890
						? blogs.image.formats.small.height
						: blogs.image.formats.small.height
				}
			/>
			<TextContainer>
				<TagContainer>
					<Tag>{blogs.TypeOfBlog}</Tag>
					<Date>{blogs.date}</Date>
				</TagContainer>

				<H1>{blogs.Headline}</H1>
				<Description>{blogs.BlogDescription}</Description>
				<Link as={`/blog/${blogs.slug}`} href='/blog/[id]'>
					<Button>Read More</Button>
				</Link>
			</TextContainer>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	margin-bottom: 2rem;
	align-items: center;

	@media (max-width: 890px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const TagContainer = styled.div`
	color: #fcfcfc;
	display: flex;
	align-items: center;
	font-family: 'Open Sans', sans-serif;

	@media (max-width: 890px) {
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}
`;

const Tag = styled.h2`
	font-size: 0.8rem;
	background: #fcfcfc;
	color: #0d6eff;
	padding: 5px 10px;
	border-radius: 10px;

	@media (max-width: 930px) {
		font-size: 0.7rem;
	}
`;

const Date = styled.h2`
	font-size: 0.8rem;
	margin-left: 1rem;
	color: #0d6eff;

	@media (max-width: 930px) {
		font-size: 0.7rem;
		margin-left: 0.8rem;
	}
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

	@media (max-width: 1230px) {
		margin-left: 2rem;
	}

	@media (max-width: 930px) {
		width: 100%;
	}

	@media (max-width: 890px) {
		max-width: 30rem;
		margin-left: 0;
	}
`;

const H1 = styled.h1`
	color: #fcfcfc;
	font-family: 'Montserrat', sans-serif;
	font-size: 2rem;
	font-weight: bold;

	@media (max-width: 930px) {
		font-size: 1.5rem;
	}
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

	@media (max-width: 930px) {
	}
`;
