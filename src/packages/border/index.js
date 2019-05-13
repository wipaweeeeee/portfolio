import React from 'react';
import styles from './border.module.scss';

const Border = (props) => {
	return (
		<div className={styles.border}>
			<div className={styles.borderText}> NOT JUST ANOTHER WORDPRESS SITE </div>
			<div className={styles.borderText}> NOT JUST ANOTHER WORDPRESS SITE </div>
		</div>
	)
}

export default Border;