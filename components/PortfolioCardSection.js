import styled from 'styled-components';
import PortfolioCard from './PortfolioCard';
const { PersonalData } = require('../Data/DummyData.json');
const { TeamData } = require('../Data/TeamData.json');

export default function PortfolioCardSection() {
	return (
		<div>
			<H1>Personal Projects</H1>
			<CardContainer>
				{PersonalData.map((data) => (
					<PortfolioCard key={data.ID} name={data.name} points={data.TechStack} />
				))}
			</CardContainer>
			<H1>Team Projects</H1>
			<CardContainer>
				{TeamData.map((data) => (
					<PortfolioCard key={data.ID} name={data.name} points={data.TechStack} />
				))}
			</CardContainer>
		</div>
	);
}

const CardContainer = styled.div`
	display: flex;
	margin-bottom: 5rem;
	flex-wrap: wrap;
`;

const H1 = styled.div`
	font-family: 'Montserrat', sans-serif;
	font-weight: bold;
	color: #fcfcfc;
	font-size: 3rem;
	margin-bottom: 1rem;
`;
