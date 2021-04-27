import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@styles/SingleEvent.module.css";

const SingleEvent = ({ events }) => {
	return (
		<div className={styles.evt}>
			{events.map((evt) => {
				const { name, id, date, image, description, slug } = evt;
				return (
					<div key={id} className={styles.event_con}>
						<Image
							className={styles.evt_image}
							src={image}
							alt={description}
							width={500}
							height={500}
						/>
						<div className={styles.info}>
							<h2>{name}</h2>
							<p>{date}</p>

							<Link href={`events/${slug}`}>
								<button className={styles.btn}>See more...</button>
							</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SingleEvent;
