import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Randomizer from '../randomizer/Randomizer';
import Resume from '../../assets/images/wipawe_resume2022.pdf'

const Home = (props) => {

	const [ focus, setFocus ] = useState();
	const [ focusImage, setFocusImage ] = useState();
	const [ showDetail, setShowDetail ] = useState(false);

	const detail = useRef(null);

	let listItem = props.content && props.content.map((item, index) => {
		return (
			<a key={index} 
				className={classNames(
					styles.listItem, 
					{ [styles.focus]: focus === item.title },
					{ [styles.focus]: focus == null }
				)} 
				onMouseOver={() => setFocus(item.title)}
				href={`/#/${item.title.toLowerCase()}`}>
				<span className={styles.title}>{item.title}</span>
				<span className={styles.year}>{item.year}</span>
			</a>
		)
	})

	let listImage = props.content && props.content.map((item, index) => {
		return (
			<img key={index} className={item.title === focus ? styles.focus : null} src={item.hero && item.hero[0].url} />
		)
	})

	return (
		<div className={styles.home}>
			<div className={styles.intro} onMouseOver={() => setFocus(null)}>
				<div className={styles.left}>
					<div>
						<span className={styles.name}>Wipawe here.</span>
						<span className={styles.sub}>[ pronounce wip-pah-wee ] People call me Wippy tho.</span>
					</div>
					<div className={styles.link} onClick={() => setShowDetail(!showDetail)}>🔗</div>
				</div>
				<div className={styles.right}>
					<Randomizer/>
				</div>
			</div>
			<div className={styles.listContainer}>
				{listItem}
			</div>
			<div className={styles.focusImage}>
				{listImage}
			</div>
			<div className={classNames(styles.detail, {[styles.show] : showDetail})} ref={detail}>
				<div className={styles.back} onClick={() => setShowDetail(false)}>&rarr; Back</div>
				<p>
					Creative Technologist currently @ Peloton. <br /> 
					Bangkok born, Brooklyn Based, citizen of the world wide web. <br /> 
					Always looking for new troubles to make life worthwhile. 
				</p>
				<div className={styles.links}>
					<span>Links</span>
					<div>	
						<a href={Resume} target="_blank">Resume</a>
						<a href="https://www.linkedin.com/in/wipawesirikolkarn/" target="_blank">LinkedIn</a>
						<a href="mailto:wsirikolkarn@gmail.com" target="_blank">Email</a>
					</div>
					<div>	
						<a href="https://www.instagram.com/wipaweeeeee/" target="_blank">Instagram</a>
						<a href="https://github.com/wipaweeeeee" target="_blank">Github</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;