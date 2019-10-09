import React, { useState } from 'react';
import styles from './landing.module.scss';
import classNames from 'classnames';
import Randomizer from '../randomizer/Randomizer';
import cc from '../../assets/images/cc.gif';
import vb from '../../assets/images/vb.jpg';
import f50 from '../../assets/images/f50.png';
import ProjectCarousel from '../carousel/ProjectCarousel';
import arrow from '../../assets/images/arrow.png';

let array = {images: [f50, vb, cc], name: "2019 | frog 50", legend: "AR (Unity, Vuforia), C4D, iOS"};

const Landing = (props) => {
	const [ project, setProject ] = useState();
	const [ content, setContent] = useState();
	const [ name, setName ] = useState();
	const [ legend, setLegend ] = useState();
	const [ mouse, setMouse ] = useState({x: 0, y: 0});
	const [ showMouse, setShowMouse ] = useState(false);

	const handleShowProject = (e, project) => {
		setProject(project);
		setContent(null);
		setName(null);
		setLegend(null);
	}

	const handleClick = (e, content) => {
		setContent(content.images);
		setName(content.name);
		setLegend(content.legend);
	}

	const handleMouse = (e) => {
		setMouse({x: e.clientX - 95, y: e.clientY});

		if ( e.clientX > window.innerWidth/2) {
			setShowMouse(true);
		} else {
			setShowMouse(false);
		}
	}

	return (
		<div className={styles.landing} onMouseMove={(e) => {handleMouse(e)}}>
		<img src={arrow} style={{position: 'absolute', top: mouse.y, left: mouse.x}} className={classNames(styles.mouseImage, {[styles.showMouse] : showMouse})} width="190" height="23" alt="mouse"/>
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
					<li>
						<a 
							onClick={(e) => handleClick(e, array)} 
							onMouseOver={(e) => handleShowProject(e, f50)}
							className={classNames({"selected" : content != null})}
						>
							frog50
						</a>
					</li>
					<li><a onMouseOver={(e) => handleShowProject(e, vb)}>VB x Reebok</a></li>
					<li><a onMouseOver={(e) => handleShowProject(e, vb)}>Reebok</a></li>
					<li><a onMouseOver={(e) => handleShowProject(e, cc)}>Creative Coding</a></li>
					<li><a>Project Flamingo</a></li>
					<li><a>Blink of an Eye</a></li>
					<li><a>Call me Adele</a></li>
				</ul>
			</div>

			<div className={styles.footer}>
				For more info: 
				wsirikolkarn@gmail.com
				CV | GH | IG
			</div>
		</div>
		<div className={classNames(styles.images, { [styles.carousel] : content != null})}>
			{ content == null && 
				<div className={styles.projectImage}>
					<img src={project} />
				</div>
			}
			<ProjectCarousel content={content} name={name} legend={legend}/>
			<Randomizer/>
		</div>
		</div>
	)
}

export default Landing;