import React from 'react';
import styles from './border.module.scss';
import classNames from 'classnames';

const Border = (props) => {
	return (
		<div className={styles.border} >
			<div className={classNames("text", styles.borderText, styles.animate)}>
				NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE &nbsp;
			</div>
			<div className={classNames("text", styles.borderText, styles.animate)}>
				NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE &nbsp;
			</div>
		</div>
	)
}

export default Border;