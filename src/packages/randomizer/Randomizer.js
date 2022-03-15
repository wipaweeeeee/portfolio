import React, { useEffect, useState } from 'react';
import styles from './randomizer.module.scss';

const Randomizer = (props) => {
	return (
		<React.Fragment>
			<a href="/#/archive" className={styles.randomizer}></a>
		</React.Fragment>
	)
}

export default Randomizer;