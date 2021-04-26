import React from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "@styles/Layout.module.css";

const Header = () => {
	const [showNav, setShowNav] = React.useState(false);

	const handleClick = () => {
		setShowNav(!showNav);
	};

	return (
		<header className={styles.header}>
			<div className={styles.mobile}>
				<Link href="/">
					<a className={styles.logo}>DJ Events</a>
				</Link>
				<button className="btn-secondary mobile_nav" onClick={handleClick}>
					{showNav ? <FaTimes /> : <FaBars />}
				</button>
			</div>
			<div className={`${styles.navbar} ${!showNav ? styles.hide : ""}`}>
				<Link href="/events">
					<a>Events</a>
				</Link>
			</div>
		</header>
	);
};

export default Header;
