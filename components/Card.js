import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { scrollRevealChildren } from '../utils/animations';

export default function Card({
	image1,
	image2,
	image3,
	image1Width,
	image1Height,
	image2Width,
	image2Height,
	image3Width,
	image3Height,
}) {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start('show');
		}
	}, [controls, inView]);

	return (
		<div>
			<CardContainer
				variants={scrollRevealChildren}
				ref={ref}
				animate={controls}
				initial='hidden'
			>
				<ImageContainer
					src={`${image1}`}
					height={image1Height}
					width={image1Width}
					mr={image3 === undefined ? '0.5rem' : ''}
				/>
				{image3 !== undefined && (
					<ImageContainer
						src={`${image3}`}
						height={image3Height}
						width={image3Width}
						mr={'0.4rem'}
						ml={'0.4rem'}
					/>
				)}

				<ImageContainer
					src={`${image2}`}
					height={image2Height}
					width={image2Width}
					ml={image3 === undefined ? '0.5rem' : ''}
				/>
			</CardContainer>
		</div>
	);
}

const CardContainer = styled(motion.div)`
	background: #1e1e1e;
	border-radius: 20px;
	border-radius: 20px;
	border-radius: 40px;
	width: 21rem;
	min-height: 20rem;
	color: #fcfcfc;
	display: flex;

	justify-content: space-around;
	align-items: center;
	padding: 10px 20px;
	text-align: center;
	margin-top: 2rem;
	border: 2px solid #0d6eff;

	@media (max-width: 370px) {
		width: 18rem;
	}
`;

const ImageContainer = styled.img`
	margin-bottom: 1rem;
	margin-left: ${(props) => (props.ml ? props.ml : 0)};
	margin-right: ${(props) => (props.mr ? props.mr : 0)};
`;
