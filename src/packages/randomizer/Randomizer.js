import React, { useEffect } from 'react';
import styles from './randomizer.module.scss';

const Randomizer = (props) => {
	let chance;

	useEffect(() => {
		chance = Math.floor(Math.random() * 10);
		// console.log(chance)
	},[])

	const handleChance = () => {
		switch (chance) {
			case 0:
				console.log('its 0')
				break;
			case 1:
				console.log('its 1')
				break;
			default:
				console.log('chances man')
		}
	}

	return (
		<div className={styles.randomizer} onClick={handleChance}/>
	)
}

export default Randomizer;