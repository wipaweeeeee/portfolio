import React, { useEffect, useState } from 'react';
import styles from './randomizer.module.scss';
import back from '../../assets/images/random/back.png';
import tt_1 from '../../assets/images/random/totetube.jpg';
import tt_2 from '../../assets/images/random/totetube_2.jpg';
import tt_3 from '../../assets/images/random/totetube_3.jpg';
import null_img from '../../assets/images/random/null_img.png';

const Randomizer = (props) => {
	// let chance;

	// useEffect(() => {
	// 	chance = Math.floor(Math.random() * 10);
	// 	// console.log(chance)
	// },[])

	// const handleChance = () => {
	// 	switch (chance) {
	// 		case 0:
	// 			console.log('its 0')
	// 			break;
	// 		case 1:
	// 			console.log('its 1')
	// 			break;
	// 		default:
	// 			console.log('chances man')
	// 	}
	// }

	return (
		<React.Fragment>
			<a href="/#/archive" className={styles.randomizer}></a>
		</React.Fragment>
	)
}

export default Randomizer;