import styled from 'styled-components';
import { keyframes } from 'styled-components';
export default function LoadingSpinner() {
	return (
		<Container>
			<Spinner>
				<div />
				<div />
				<div />
				<div />
			</Spinner>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const SpinnerKeyframe = keyframes`
      0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;

	div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 64px;
		height: 64px;
		margin: 8px;
		border: 8px solid #fff;
		border-radius: 50%;
		animation: ${SpinnerKeyframe} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: #fff transparent transparent transparent;
	}
	&:nth-child(1) {
		animation-delay: -0.45s;
	}
	&:nth-child(2) {
		animation-delay: -0.3s;
	}
	&:nth-child(3) {
		animation-delay: -0.15s;
	}
`;