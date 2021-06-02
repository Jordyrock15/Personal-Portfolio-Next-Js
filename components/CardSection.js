import Card from './card';
import styled from 'styled-components';
const { Tech } = require('../Data/TechStackData.json');

export default function CardSection() {
	return (
		<Container>
			<H2>&#60; My Tools /&#62;</H2>
			<CardContainer>
				<FirstCardContainer>
					<div>
						<ImageContainer src='/css_icon.png' height={120} width={94} />
						<img src='/html_icon.png' height={113} width={79} />

						<ImageContainer src='/javascript_icon.png' height={124} width={103} />
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non
						animi, doloremque exercitationem mollitia.
					</p>
				</FirstCardContainer>
				{Tech.map((data) => (
					<Card
						desc={data.description}
						image1={data.screenshots[0].Image}
						image2={data.screenshots[1].Image}
						image1Width={data.screenshots[0].Width}
						image1Height={data.screenshots[0].Height}
						image2Width={data.screenshots[1].Width}
						image2Height={data.screenshots[1].Height}
						key={data.ID}
					/>
				))}
			</CardContainer>
		</Container>
	);
}

const Container = styled.div`
	margin-left: 4rem;
	margin-top: 5rem;
	@media (max-width: 730px) {
		margin-left: 0;
	}
`;

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
`;

const H2 = styled.h2`
	color: #fcfcfc;
	font-size: 2.5rem;
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
	margin-bottom: 3rem;
`;

const FirstCardContainer = styled.div`
	background: #1e1e1e;
	border-radius: 20px;
	border-radius: 20px;
	border-radius: 40px;
	width: 20rem;
	height: 20rem;
	color: #fcfcfc;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0px 20px;
	text-align: center;
	margin-top: 2rem;
	border: 2px solid #0d6eff;
`;

const ImageContainer = styled.img`
	margin-bottom: 1rem;
`;
