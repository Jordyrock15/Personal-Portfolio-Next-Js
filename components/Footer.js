import styled from 'styled-components';

export default function Footer() {
	return (
		<FooterContainer>
			<Paragraph>
				<Span>&copy;</Span> 2021 Jordan Barrand All rights reserved
			</Paragraph>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	background: #1e1e1e;
	min-height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Paragraph = styled.p`
	margin: 0;
	padding: 1rem 0;
	color: #959595;
	display: flex;
	align-items: center;

	@media (max-width: 375px) {
		font-size: 0.8rem;
	}
`;

const Span = styled.span`
	color: #0d6eff;
	font-size: 2rem;
	margin-right: 0.5rem;
	align-self: center;

	@media (max-width: 375px) {
		font-size: 1.8rem;
	}
`;
