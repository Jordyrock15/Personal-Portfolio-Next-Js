import AboutMe from '../components/AboutMe';
import Layout from '../components/Layout';
import TopComponent from '../components/TopComponent';

export default function Home() {
	return (
		<Layout>
			<TopComponent />
			<AboutMe />
		</Layout>
	);
}
