import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Banner from '../border/index';
import Randomizer from '../randomizer/Randomizer';
import Details from '../details/Details';

const Home = (props) => {

	const [ content, setContent ] = useState([]);
	const [ focus, setFocus ] = useState();
	const [ focusImage, setFocusImage ] = useState();
	const [ showDetails, setShowDetails ] = useState(false);

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

	let listItem = content && content.map((item, index) => {
		return (
			<div key={index} 
				className={classNames(
					styles.listItem, 
					{ [styles.focus]: focus === item.title },
					{ [styles.focus]: focus == null }
				)} 
				onMouseOver={() => setFocus(item.title)}
				onClick={() => setShowDetails(true)}>
				<span className={styles.title}>{item.title}</span>
				<span className={styles.year}>{item.year}</span>
			</div>
		)
	})

	let listImage = content && content.map((item, index) => {
		return (
			<img key={index} className={item.title === focus ? styles.focus : null} src={item.hero && item.hero[0].url} />
		)
	})

	useEffect(() => {

		if (showDetails) {
			document.body.style.overflow = 'hidden';
		}
		
     	return () => document.body.style.overflow = 'unset';

	}, [ showDetails ])

	return (
		<React.Fragment>
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
				{listImage}
			</div>
		</div>
		<Details close={() => setShowDetails(false)} show={showDetails} content={content.filter(item => item.title === focus)}/>
		</React.Fragment>
	)
}

export default Home;