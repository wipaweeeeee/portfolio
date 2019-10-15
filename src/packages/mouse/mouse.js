import React, { useState, useEffect } from 'react';
import arrow from '../../assets/images/arrow.png';
import styles from './mouse.module.scss';
import classNames from 'classnames';

const Mouse = (props) => {
	const [ showMouse, setShowMouse ] = useState(true);
	const [ mouse, setMouse ] = useState({x: 0, y: 0});

	useEffect(() => {

		const handleMouse = (e) => {
			setMouse({x: e.clientX - 95, y: e.clientY});
		}

		document.addEventListener('mousemove', handleMouse);

		return () => {
			document.removeEventListener('mousemove', handleMouse);
		}
	})

	return (
		<img src={arrow} style={{position: 'absolute', pointerEvents: 'none', left: mouse.x, top: mouse.y}} className={classNames(styles.mouseImage, {[styles.showMouse] : showMouse})} width="190" height="23" alt="mouse"/>
	)
}

export default Mouse;