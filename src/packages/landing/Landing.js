import React, { useState } from 'react';
import styles from './landing.module.scss';
import Randomizer from '../randomizer/Randomizer';
import cc from '../../assets/images/cc.gif';
import vb from '../../assets/images/vb.jpg';
import f50 from '../../assets/images/f50.png';

const Landing = (props) => {
	const [ project, setProject ] = useState();

	const handleShowProject = (e, project) => {
		setProject(project);
	}

	return (
		<div className={styles.landing}>
		<div className={styles.info}>
			<div className={styles.intro}>
				Wipawe here. 
				[ pronounce wip-pah-wee]
				People call me Wippy tho.
				I like to design as much as I like to code. 
				Preferably, I would like to do both at the same time. 
				People sometimes call this Design Technologist, or 
				at least that’s what they call me at frog design. 
				You can see some stuff I made here:
			</div>

			<div className={styles.nav}>
				<ul>
					<li><a href="" onMouseOver={(e) => handleShowProject(e, f50)}>frog50</a></li>
					<li><a href="" onMouseOver={(e) => handleShowProject(e, vb)}>VB x Reebok</a></li>
					<li><a href="" onMouseOver={(e) => handleShowProject(e, vb)}>Reebok</a></li>
					<li><a href="" onMouseOver={(e) => handleShowProject(e, cc)}>Creative Coding</a></li>
					<li><a href="">Project Flamingo</a></li>
					<li><a href="">Blink of an Eye</a></li>
					<li><a href="">Call me Adele</a></li>
				</ul>
			</div>

			<div className={styles.footer}>
				For more info: 
				wsirikolkarn@gmail.com
				CV | GH | IG
			</div>
		</div>
		<div className={styles.images}>
			<div className={styles.projectImage}>
				<img src={project} />
			</div>
			<Randomizer/>
		</div>
		</div>
	)
}

export default Landing;