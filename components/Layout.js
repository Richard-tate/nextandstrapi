import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import ShowCase from "./Showcase";
import styles from "@styles/Layout.module.css";

const Layout = ({ children, title, keywords, description }) => {
	const router = useRouter();
	return (
		<React.Fragment>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Header />
			{router.pathname === "/" && <ShowCase />}
			<main className={styles.container}>{children}</main>
			<Footer />
		</React.Fragment>
	);
};

Layout.defaultProps = {
	title: "DJ Events | Find the hottest parties",
	description: "Find the latest DJ and other musical events",
	keywords: "music, dj, edm, events",
};

export default Layout;
