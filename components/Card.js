import styled from 'styled-components';

export default function Card({
	desc,
	image1,
	image2,
	image1Width,
	image1Height,
	image2Width,
	image2Height,
}) {
	return (
		<div>
			<CardContainer>
				<div>
					<ImageContainer
						src={`${image1}`}
						height={image1Height}
						width={image1Width}
						mr='0.5rem'
					/>

					<ImageContainer
						src={`${image2}`}
						height={image2Height}
						width={image2Width}
						ml='0.5rem'
					/>
				</div>
				<p>{desc}</p>
			</CardContainer>
		</div>
	);
}

const CardContainer = styled.div`
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
	margin-left: ${(props) => (props.ml ? props.ml : 0)};
	margin-right: ${(props) => (props.mr ? props.mr : 0)};
`;
