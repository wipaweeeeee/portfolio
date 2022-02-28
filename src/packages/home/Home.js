import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Banner from '../border/index';
import Randomizer from '../randomizer/Randomizer';

const Home = (props) => {

	const [ content, setContent ] = useState([]);
	const [ focus, setFocus ] = useState();
	const [ focusImage, setFocusImage ] = useState();

	useEffect(() => {
		fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Homepage?api_key=${process.env.REACT_APP_AIRTABLE_KEY}`)
        .then(res => res.json())
        .then(data => data.records)
        .then(rec => {
          let _data = [];
          rec.forEach(item => {
            _data.push(item.fields)
          })

          return _data;
        })
        .then(dataset => setContent(dataset.sort((a,b) => b.year - a.year)))
        .catch(error => console.log(error));
	}, [])

	useEffect(() => {

		let focusItem = content && content.filter(item => item.title === focus)[0];
		if (focusItem !== undefined) {
			setFocusImage(focusItem.image[0].url);
		} else {
			setFocusImage(null);
		}
		

	}, [focus])

	let listItem = content && content.map((item, index) => {
		return (
			<a key={index} 
				className={classNames(
					styles.listItem, 
					{ [styles.focus]: focus === item.title },
					{ [styles.focus]: focus == null }
				)} 
				onMouseOver={() => setFocus(item.title)}>
				<span className={styles.title}>{item.title}</span>
				<span className={styles.year}>{item.year}</span>
			</a>
		)
	})

	return (
		<div className={styles.home}>
			<Banner />
			<div className={styles.intro} onMouseOver={() => setFocus(null)}>
				<div className={styles.left}>
					<span className={styles.name}>Wipawe here.</span>
					<span className={styles.sub}>[ pronounce wip-pah-wee ] People call me Wippy tho.</span>
				</div>
				<div className={styles.right}>
					<span>8°C</span>
					<Randomizer/>
				</div>
			</div>
			<div className={styles.listContainer}>
				{listItem}
			</div>
			<div className={styles.focusImage}>
				<img src={focusImage} />
			</div>
		</div>
	)
}

export default Home;