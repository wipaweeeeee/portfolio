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

	//<video autoPlay muted loop><source src="https://wipawe-portfolio.s3.amazonaws.com/null_promo.mp4" type="video/mp4"/></video>
	//<video autoPlay muted loop><source src="https://wipawe-portfolio.s3.amazonaws.com/null_sm.mp4" type="video/mp4"/></video>
						

	const [ show, setShow ] = useState(false);

	return (
		<React.Fragment>
			<div className={styles.randomizer} onClick={() => setShow(true)}/>
			{ show && 
				<div className={styles.archiveContainer}>
					<div className={styles.archiveTitle}>
						<div className={styles.archiveTitleContent}>
							<img className={styles.back} src={back} alt="back to main" onClick={() => setShow(false)}/>
							<p>An ongoing archive of side projects.</p>
						</div>
					</div>
					<div className={styles.archiveContent}>
						<div className={styles.contentTitle}>
							<h2>null</h2>
							<h3>An Instagram filter, in collaboration with Eva Peng.</h3>
						</div>
							<img src={null_img} alt="null" style={{width: '418px', height: 'auto'}}/>
						<div className={styles.contentTitle}>
							<h2>Totally Tubular</h2>
							<h3>A skateboard made totally with tubes, in collaboration with Eva Peng.</h3>
						</div>
						<img src={tt_1} alt="totallytubular" />
						<img src={tt_2} alt="totallytubular" />
						<img src={tt_3} alt="totallytubular" />
					</div>
				</div> }
		</React.Fragment>
	)
}

export default Randomizer;