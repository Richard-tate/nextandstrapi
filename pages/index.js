import { API_URL } from "@config/index";
import Layout from "@components/Layout";
import SingleEvent from "@components/SingleEvent";
import styles from "@styles/SingleEvent.module.css";

export default function Home({ events }) {
	return (
		<Layout>
			<h2 className={styles.title_sub}>Upcoming Events</h2>
			{events.length === 0 && <h3>No events to show</h3>}
			<SingleEvent events={events} />
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/events`);
	const events = await res.json();

	return {
		props: { events },
		revalidate: 1,
	};
}
