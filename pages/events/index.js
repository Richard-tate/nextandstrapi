import Layout from "@components/Layout";
import Link from "next/link";
const eventsPage = () => {
	return (
		<Layout title="DJ Events | Your Events">
			<h2>events go here</h2>
			<Link href="/events/add">Add an event</Link>
		</Layout>
	);
};

export default eventsPage;
