import Link from "next/link";
import Layout from "@components/Layout";
import styles from "@styles/About.module.css";
const about = () => {
	return (
		<Layout title="Dj Events | About page">
			<section className={styles.aboutPage}>
				<article className={styles.aboutTop}>
					<h1>About</h1>
					<p>This is an app to find the latest DJ and other musical events.</p>
					<small>Version 1.0.0</small> <br />
				</article>
				<article className={styles.aboutLink}>
					<Link href="/"> Back to home page</Link>
				</article>
			</section>
		</Layout>
	);
};

export default about;
