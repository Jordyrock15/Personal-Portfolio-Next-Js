import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SlideInRight, SlideInUp } from '../utils/animations';
import ActiveLink from './ActiveLink';

export default function Header() {
	return (
		<Container>
			<Link href='/'>
				<motion.a variants={SlideInRight} animate='show' initial='hidden'>
					<Image src='/navbar_logo.svg' width={85} height={85} alt='Navbar Logo' />
				</motion.a>
			</Link>

			<Hide>
				<Nav variants={SlideInUp} animate='show' initial='hidden'>
					<Ul>
						<Li>
							<Link activeClassName='active' href='/'>
								<a>Home</a>
							</Link>
						</Li>
						<Li>
							<Link activeClassName='active' href='/portfolio'>
								<a>Portfolio</a>
							</Link>
						</Li>
						<Li>
							<Link href='/blog'>
								<a>Blog</a>
							</Link>
						</Li>
					</Ul>
				</Nav>
			</Hide>
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

	@media (max-width: 700px) {
		flex-direction: column;
	}
`;

const Hide = styled.div`
	overflow: hidden;
`;

const Nav = styled(motion.nav)`
	@media (max-width: 700px) {
		width: 20rem;
		margin-top: 0.5rem;
	}
`;

const Ul = styled.ul`
	display: flex;
	flex-direction: row;
	list-style: none;
	font-family: 'Montserrat', sans-serif;
	font-weight: bold;
	font-size: 1.5rem;

	@media (max-width: 700px) {
		justify-content: space-evenly;
		align-items: center;
	}

	@media (max-width: 375px) {
		font-size: 1.3rem;
	}
`;

const Li = styled.li`
	margin-left: 4rem;

	@media (max-width: 700px) {
		margin: 0;
	}
`;
