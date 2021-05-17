import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export default function Header() {
	return (
		<Container>
			<Image src='/navbar_logo.svg' width={96} height={96} alt='Navbar Logo' />

			<nav>
				<Ul>
					<Li>
						<Link href='#'>Blog</Link>
					</Li>
					<Li>
						<Link href='/portfolio'>Portfolio</Link>
					</Li>
				</Ul>
			</nav>
		</Container>
	);
}

const Container = styled.header`
	background: #1e1e1e;
	color: #fcfcfc;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 3rem;
	padding-right: 3rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

const Ul = styled.ul`
	display: flex;
	list-style: none;
	font-family: 'Montserrat', sans-serif;
	font-weight: bold;
	font-size: 1.5rem;
	justify-content: space-around;
`;

const Li = styled.li`
	margin-left: 4rem;
`;
