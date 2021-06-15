import styled from 'styled-components';
import Image from 'next/image';

export default function Footer() {
	return (
		<FooterContainer>
			<SocialContainer>
				<a href='https://github.com/Jordyrock15' target='_blank'>
					<Image src='/github_icon.png' width='50' height='50'></Image>
				</a>
				<a href='https://www.linkedin.com/in/jordan-barrand-b13725206/' target='_blank'>
					<Image src='/linkedin_icon.png' width='50' height='50'></Image>
				</a>
				<a href='https://www.instagram.com/jordan.barrand/' target='_blank'>
					<Image src='/instagram_icon.png' width='50' height='50'></Image>
				</a>
			</SocialContainer>
			<Paragraph>
				<Span>&copy;</Span> 2021 Jordan Barrand All rights reserved
			</Paragraph>
		</FooterContainer>
	);
}

const SocialContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 15rem;
`;

const FooterContainer = styled.footer`
	background: #1e1e1e;
	min-height: 40px;
	display: flex;
	align-items: center;
	flex-direction: column;
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
