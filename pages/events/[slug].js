import Layout from "@components/Layout";
import { API_URL } from "@config/index";

export default function eventPage({ evt }) {
	console.log(evt);
	return (
		<Layout>
			<h2>{evt.name}</h2>
			<p>
				{evt.date} at {evt.time}
			</p>
			<p>{evt.description}</p>
			<p>{evt.address}</p>
		</Layout>
	);
}
export async function getServerSideProps({ query: { slug } }) {
	const res = await fetch(`${API_URL}/api/events/${slug}`);
	const events = await res.json();

	return {
		props: {
			evt: events[0],
		},
	};
}
