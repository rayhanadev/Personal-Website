import React from 'react';
import Image from 'next/image';

import Head from '../../components/Head/Head.js';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import styles from '../../styles/Resume.module.scss';

export default function Resume() {
	return (
		<div className={styles.container}>
			<Head title="Resume" />
			<div className={styles.topBar}>
				<Navigation />
				<h1 className={styles.title}>My Resume ＼_ﾍ(ω｀●)</h1>
				<Footer />
			</div>
		</div>
	)
}