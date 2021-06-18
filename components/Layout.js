import Head from 'next/head';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { motion } from 'framer-motion';

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<link rel='shortcut icon' href='/navbar_logo.svg'></link>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>

			<Header />
			<Container>{children}</Container>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: 'Jordan Barrand | Personal Website',
	description: '',
	keywords: '',
};

const Container = styled.div`
	min-height: 100vh;
	background: #1e1e1e;
	margin: 0 15vw;

	@media (max-width: 500px) {
		margin: 0 9vw;
	}
`;
