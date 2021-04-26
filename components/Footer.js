import Link from "next/link";
import styles from "@styles/Layout.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>Copyright &copy; DJ Events 2021</p>

			<Link href="/about">
				<a>About Us</a>
			</Link>
		</footer>
	);
};

export default Footer;
