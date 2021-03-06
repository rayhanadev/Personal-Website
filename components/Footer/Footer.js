import React from 'react';
import Link from 'next/link';

import styles from './Footer.module.scss';

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.logo}>
				<Link href="/">
					<a>
							<svg
								id="svg"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								viewBox="0,0,400,400"
							>
								<g id="svgg">
									<path
										id="path0"
										d="M137.836 7.134 C -34.666 71.397,-50.080 299.521,112.581 380.897 C 160.326 404.783,236.097 407.563,278.773 386.995 C 292.546 380.357,304.674 375.785,305.724 376.836 C 306.775 377.886,320.938 364.798,337.198 347.752 C 439.346 240.660,415.594 84.169,287.148 17.994 C 252.806 0.301,171.961 -5.579,137.836 7.134 M151.748 93.867 L 155.350 113.067 199.008 110.329 C 223.020 108.824,260.667 102.625,282.667 96.554 C 360.682 75.025,367.520 81.197,316.340 126.945 L 280.681 158.820 294.517 190.077 C 310.243 225.601,318.988 265.543,321.168 311.803 L 322.667 343.606 287.859 361.457 C 246.846 382.492,170.667 392.888,170.667 377.451 C 170.667 372.068,163.134 368.159,148.139 365.761 C 120.460 361.335,106.667 349.605,106.667 330.493 C 106.667 305.811,118.654 301.106,146.810 314.736 C 160.237 321.236,172.737 325.040,174.588 323.190 C 182.102 315.676,155.797 291.336,132.968 284.680 C 65.321 264.955,63.033 204.702,125.854 97.333 C 142.045 69.661,147.081 68.987,151.748 93.867 M222.299 215.407 C 219.323 223.162,240.734 245.333,251.198 245.333 C 260.072 245.333,266.792 225.410,259.858 219.655 C 247.113 209.078,225.659 206.651,222.299 215.407 M213.333 244.507 C 213.333 260.895,231.515 274.224,239.971 264.035 C 245.618 257.231,245.144 253.964,237.243 245.233 C 225.232 231.961,213.333 231.600,213.333 244.507 "
										stroke="none"
										fill="#DDD"
										fillRule="evenodd"
									/>
								</g>
							</svg>
					</a>
				</Link>
			</div>
			<div>
				<ul>
					<li>
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</li>
					<li>
						<Link href="/projects">
							<a>Projects</a>
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<a href="https://github.com/rayhanadev">Github</a>
					</li>
					<li>
						<a href="https://polywork.com/rayhanadev">Polywork</a>
					</li>
					<li>
						<a href="https://linkedin.com/in/rayhanadev">LinkedIn</a>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<p>Email: rayhanadev@protonmail.com</p>
					</li>
					<li>
						<p>Telephone: NA</p>
					</li>
					<li>
						<p>&copy; { new Date().getFullYear() } Ray Arayilakath. All Rights Reserved.</p>
					</li>
				</ul>
			</div>
		</div>
	)
}