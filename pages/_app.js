import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 3000);
	});

	return (
		<>
			{isLoading ? (
				<OverallContainer
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 3 }}
				>
					<LoadingSpinner />
				</OverallContainer>
			) : (
				<Component {...pageProps} />
			)}
		</>
	);
}

const OverallContainer = styled(motion.div)``;

export default MyApp;
