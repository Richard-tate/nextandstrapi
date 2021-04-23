import Link from "next/link";
import styles from "../styles/About.module.css";
const about = () => {
	return (
		<main className={styles.container}>
			<section className={styles.aboutpage}>
				<article className={styles.abouttop}>
					<h1>About</h1>
					<p>This is an app to find the latest DJ and other musical events.</p>
					<small>Version 1.0.0</small> <br />
				</article>
				<article className={styles.aboutlink}>
					<Link href="/"> Back to home page</Link>
				</article>
			</section>
		</main>
	);
};

export default about;
