import React, { useState } from 'react';
import styles from './landing.module.scss';
import classNames from 'classnames';
import ProjectCarousel from '../carousel/ProjectCarousel';
import Mouse from '../mouse/mouse';
import Randomizer from '../randomizer/Randomizer';
import cc from '../../assets/images/cc.gif';
import vb from '../../assets/images/vb.jpg';
import f50 from '../../assets/images/f50/f50.png';
import wall from '../../assets/images/f50/wall.JPG';
import tattoo from '../../assets/images/f50/tattoo.gif';
import magritte from '../../assets/images/f50/ar_2.gif';
import apple from '../../assets/images/f50/apple.gif';
import yamaha from '../../assets/images/f50/yamaha.gif';

let array = {
	images: [
		{ src: f50,
		  type: "image"
		},
		{
		  title: "frog50",
		  description: "Frog design turns 50 years old in 2019. We kicked off the year-long celebration in Austin, Texas during SXSW. The exhibition we curated included a frog50 AR app, 3 interactive mirrors and a redo (hack) of the original Apple IIc. I was responsible for concept and production of the frog50 app which its main goal is to bring second life to selected pieces from frog’s archive including the Yamaha frog 750, Apple IIc, Renee Magritte’s exhibition at SFMoma and LQD Palo. The augmented content tells back stories and take on each project in new exciting ways. We also made augmented tattoo of friedolin (the frog logo) so people can take it anywhere with them. Hartmut Esslinger (founder of frog) was seen rather delighted while he was playing with the app.",
		  type: "html"
		},
		{
		  src: "https://wipawe-portfolio.s3.amazonaws.com/f50.mp4",
		  type: "video"
		},
		{ src: wall,
		  type: "image"
		},
		{ src: tattoo,
		  type: "image"
		},
		{ src: apple,
		  type: "image"
		},
		{ src: yamaha,
		  type: "image"
		},
		{ src: magritte,
		  type: "image"
		}

	], 
	name: "2019 | frog 50", 
	legend: "AR (Unity, Vuforia), C4D, iOS",
	app: true
};

const Landing = (props) => {
	const [ project, setProject ] = useState();
	const [ content, setContent] = useState();

	const handleShowProject = (e, project) => {
		setProject(project);
		setContent(null);
	}

	const handleClick = (e, content) => {
		setContent({content: content.images, name: content.name, legend: content.legend, app: content.app});
	}

	return (
		<div className={styles.landing}>
		<Mouse />
		<div className={styles.info}>
			<div className={styles.intro}>
				Wipawe here. <br />
				[ pronounce wip-pah-wee] <br />
				<span className="gray">People call me Wippy tho. </span><br />
				I like to design as much as I like to code. <br />
				Preferably, I would like to do both at the same time. 
				People sometimes call this Design Technologist, or 
				at least that’s what they call me at frog design. <br />
				You can see some stuff I made here:
			</div>

			<div className={styles.nav}>
				<ul>
					<li>
						<a 
							onClick={(e) => handleClick(e, array)} 
							onMouseOver={(e) => handleShowProject(e, f50)}
							className={classNames({"active" : content != null})}
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
				For more info: <br />
				<a href="mailto:wsirikolkarn@gmail.com">wsirikolkarn@gmail.com</a><br />
				CV | GH | IG
			</div>
		</div>
		<div className={classNames(styles.images, { [styles.carousel] : content != null})}>
			{ content == null && 
				<div className={styles.projectImage}>
					<img src={project} />
				</div>
			}
			{content && <ProjectCarousel content={content.content} name={content.name} legend={content.legend} app={content.app}/>}
			<Randomizer/>
		</div>
		</div>
	)
}

export default Landing;