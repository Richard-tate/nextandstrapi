import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@components/Layout";
import styles from "@styles/about.module.css";

const errorPage = () => {
	return (
		<Layout>
			<section className={styles.aboutPage}>
				<article className={styles.aboutTop}>
					<h1>
						<FaExclamationTriangle /> 404
					</h1>
					<h4>Sorry, there is nothing here</h4>
					<Link href="/">Go Back Home</Link>
				</article>
			</section>
		</Layout>
	);
};

export default errorPage;
