import React, { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import useSWR from 'swr';

import { getAllPosts } from '../../libs/posts.js';

import Head from '../../components/Head/Head.js';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import styles from '../../styles/Blog.module.scss';

export const getStaticProps = async () => {
	const postsByDate = await getAllPosts();
	const topPosts = await getAllPosts('views', 3);
	return {
		props: {
			topPosts,
			posts: postsByDate
		},
	};
};

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

export default function Blog({ posts, topPosts }) {
	return (
		<div className={styles.container}>
			<Head title="Thoughts..." />
			<div className={styles.topBar}>
				<Navigation />
				<h1 className={styles.title}><strong>Thoughts...</strong></h1>
				<p className={styles.subtitle}>
					A blog I&apos;ve been writing since 2021 detailing my life and what&apos;s on my mind,
					a culmination of {posts.length} published posts I hope you enjoy the occasional
					reading :).
				</p>
			</div>
			<h2 className={styles.sectionHeader}><strong>Top Posts</strong></h2>
			<div className={styles.postsContainer}>
				{
					topPosts.map(({ frontmatter: post, slug, views }) => {
						return (
							<Link href={'/blog/' + slug} key={slug} passHref>
								<div className={styles.post}>
									<div className={styles.coverImg}>
										<Image
											src={post.cover ?? '/filler.jpg'}
											alt="cover image"
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<h3>{post.title}</h3>
									<p>{post.description}</p>
									<div className={styles.infoContainer}>
										<p className={styles.date}>{new Date(post.publishedAt).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
										<p className={styles.views}>{views} view{views === 1 ? '' : 's'}</p>
									</div>
								</div>
							</Link>
						)
					})
				}
			</div>
			<h2 className={styles.sectionHeader}><strong>All Posts</strong></h2>
			<div className={styles.postsContainer}>
				{
					posts.map(({ frontmatter: post, slug }) => {
						return (
							<Link href={'/blog/' + slug} key={slug} passHref>
								<div className={styles.post}>
									<div className={styles.coverImg}>
										<Image
											src={post.cover ?? '/filler.jpg'}
											alt="cover image"
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<h3>{post.title}</h3>
									<p>{post.description}</p>
									<div className={styles.infoContainer}>
										<p className={styles.date}>{new Date(post.publishedAt).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
									</div>
								</div>
							</Link>
						)
					})
				}
			</div>
		<Footer />
		</div>
	)
}