import { API_URL } from "@config/index";
import Link from "next/link";
import Layout from "@components/Layout";
import SingleEvent from "@components/SingleEvent";
import styles from "@styles/SingleEvent.module.css";

export default function Home({ events }) {
	return (
		<Layout>
			<h2 className={styles.title_sub}>Upcoming Events</h2>
			{events.length === 0 && <h3>No events to show</h3>}
			<SingleEvent events={events} />

			{events.length > 0 && (
				<Link href="/events">
					<a className="btn-secondary" style={{ margin: "1rem 0 " }}>
						View All Events
					</a>
				</Link>
			)}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/events`);
	const events = await res.json();

	return {
		props: { events: events.slice(0, 3) },
		revalidate: 1,
	};
}
