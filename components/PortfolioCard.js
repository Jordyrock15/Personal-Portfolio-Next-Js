import Link from 'next/link';
import styled from 'styled-components';

export default function PortfolioCard({ name, points, slug }) {
	let techstacksplit = points.split(' ');

	return (
		<Card>
			<H1>{name}</H1>

			<UL>
				{techstacksplit.map((data) => (
					<li key={data}>{data}</li>
				))}
			</UL>
			<Link as={`/portfolio/${slug}`} href='/portfolio/[id]'>
				<Button>Learn More</Button>
			</Link>
		</Card>
	);
}

const Card = styled.div`
	position: relative;
	border: 1px solid #0d6eff;
	width: 20rem;
	color: #fcfcfc;
	background: #272727;
	padding: 20px;
	height: 20rem;
	margin-left: 1rem;
	margin-top: 1rem;

	/* &:nth-child(1) {
		margin-left: 0;
	} */

	&:hover {
		border: 1px solid #fcfcfc;
	}
`;

const H1 = styled.div`
	font-family: 'Montserrat', sans-serif;
	font-weight: bold;
	font-size: 2rem;
	margin-bottom: 1rem;
`;

const UL = styled.ul`
	font-family: 'Open Sans', sans-serif;
	margin-left: 20px;
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
	position: absolute;
	bottom: 10px;
	cursor: pointer;
`;
