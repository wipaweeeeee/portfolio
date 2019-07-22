import React, { useEffect } from 'react';
import styles from './border.module.scss';
import classNames from 'classnames';

const Border = (props) => {

	useEffect( () => {
		const items = Array.prototype.slice.call( inputEl.current.childNodes )

		for (var i = 0; i < items.length; i++) {
			animTiming(items[i], 10000*i)
		}
	})

	const animTiming = (item, delay) => {
		setTimeout ( function (){
	      item.classList.add(`${styles.animate}`);
	    }, delay);
	}

	const inputEl = React.createRef();

	// const nodelist = document.getElementsByClassName('text');
	// console.log(nodelist)
	// var items = Array.prototype.slice.call( nodelist )
	// const items = Array.from(nodelist)

	// let items = Array.from(document.getElementsByClassName("borderText"));
	

	// for (var i = 0; i < items.length; i++) {
	// 	console.log('in array')
	// 	animTiming(items[i], 100*i)
	// }

	return (
		<div className={styles.border} ref={inputEl}>
			<div className={classNames("text", styles.borderText)}>NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE &nbsp;</div>
			<div className={classNames("text", styles.borderText)}>NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE NOT JUST ANOTHER WORDPRESS SITE &nbsp;</div>
			
		</div>
	)
}

export default Border;