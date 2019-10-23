import React, { useState, useEffect } from 'react';
import arrow from '../../assets/images/arrow.png';
import styles from './mouse.module.scss';
import classNames from 'classnames';

const Mouse = (props) => {
	const [ showMouse, setShowMouse ] = useState();
	const [ mouse, setMouse ] = useState({x: 0, y: 0});

	useEffect(() => {

		const handleMouse = (e) => {
			setMouse({x: e.clientX - window.innerWidth/2 - 95, y: e.clientY});

			if (e.clientX > window.innerWidth / 2 && props.content != null) {
				setShowMouse(true);
			} else {
				setShowMouse(false);
			}
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