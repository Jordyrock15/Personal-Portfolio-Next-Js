import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export default function BlogCard({ title, mainImage, blogType, published, slug }) {
	console.log(slug);
	return (
		<Container>
			<Image
				src={`${mainImage.formats.medium.url}`}
				width={mainImage.formats.medium.width}
				height={mainImage.formats.medium.height}
			/>
			<H1>{title}</H1>
			<h2>
				{published} {blogType}
			</h2>
			<Link as={`/blog/${slug}`} href='/blog/[id]'>
				<Button>Read More</Button>
			</Link>
		</Container>
	);
}

const Container = styled.div`
	/* border: 1px solid #fcfcfc; */
`;

const H1 = styled.h1`
	color: #fcfcfc;
	font-family: 'Montserrat', sans-serif;
	font-size: 2rem;
	font-weight: bold;
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
`;
