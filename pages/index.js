import AboutMe from '../components/AboutMe';
import CardSection from '../components/CardSection';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import TopComponent from '../components/TopComponent';
import styled from 'styled-components';

export default function Home() {
	return (
		<Layout>
			<TopComponent />
			<H1>&#60;&#62;</H1>
			<AboutMe />
			<CardSection />
			<H1>&#60;/&#62;</H1>
			<Contact />
		</Layout>
	);
}

const H1 = styled.h1`
	font-size: 4rem;
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
	color: #fcfcfc;
	margin-top: 10rem;

	@media (max-width: 730px) {
		display: none;
	}
`;
