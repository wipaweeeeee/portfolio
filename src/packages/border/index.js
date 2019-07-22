import React, { useEffect } from 'react';
import styles from './border.module.scss';
import classNames from 'classnames';

const Border = (props) => {

	useEffect( () => {
		const items = Array.prototype.slice.call( borderEl.current.childNodes )

		for (var i = 0; i < items.length; i++) {
			animTiming(items[i], 10000*i)
		}
	})

	const animTiming = (item, delay) => {
		setTimeout ( function (){
	      item.classList.add(`${styles.animate}`);
	    }, delay);
	}

	const borderEl = React.createRef();

	return (
		<div className={styles.border} ref={borderEl}>
			<div className={classNames("text", styles.borderText)}>NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE &nbsp;</div>
			<div className={classNames("text", styles.borderText)}>NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE &nbsp;</div>
			
		</div>
	)
}

export default Border;