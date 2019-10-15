import React, { useState } from 'react';
import styles from './landing.module.scss';
import classNames from 'classnames';
import Randomizer from '../randomizer/Randomizer';
import cc from '../../assets/images/cc.gif';
import vb from '../../assets/images/vb.jpg';
import f50 from '../../assets/images/f50.png';
import ProjectCarousel from '../carousel/ProjectCarousel';
import Mouse from '../mouse/mouse';

let array = {
	images: [
		{ src: f50,
		  type: "image"
		},
		{
		  src: <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>,
		  type: "html"
		},
		{
		  src: vb,
		  type: "image"
		}
	], 
	name: "2019 | frog 50", 
	legend: "AR (Unity, Vuforia), C4D, iOS"
};

const Landing = (props) => {
	const [ project, setProject ] = useState();
	const [ content, setContent] = useState();
	const [ name, setName ] = useState();
	const [ legend, setLegend ] = useState();

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

	return (
		<div className={styles.landing}>
		<Mouse />
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