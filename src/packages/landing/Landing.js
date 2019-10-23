import React, { useState } from 'react';
import styles from './landing.module.scss';
import classNames from 'classnames';
import ProjectCarousel from '../carousel/ProjectCarousel';
import Mouse from '../mouse/mouse';
import Randomizer from '../randomizer/Randomizer';
import app from '../../assets/images/dl.png';
import web from '../../assets/images/web.png';
import gh from '../../assets/images/gh.png';
import cc from '../../assets/images/cc.gif';
import vb from '../../assets/images/vb/vb-intro.png';
import f50 from '../../assets/images/f50/f50.png';
import wall from '../../assets/images/f50/wall.JPG';
import tattoo from '../../assets/images/f50/tattoo-in-situ.gif';
import magritte from '../../assets/images/f50/ar_2.gif';
import reebok from '../../assets/images/reebok/reebok-intro.png'
import workoutIntro from '../../assets/images/reebok/workout.gif'
import pumpIntro from '../../assets/images/reebok/pump.gif'
import freestyleIntro from '../../assets/images/reebok/freestyle.gif'
import workoutFP from '../../assets/images/reebok/freestyleFP.png'
import pumpFP from '../../assets/images/reebok/pumpFP.png'
import freestyleFP from '../../assets/images/reebok/workoutFP.png'
import go from '../../assets/images/reebok/go.jpg'
import flamingo from '../../assets/images/flamingo/flamingo.png'
import eye from '../../assets/images/eye/eye.png'
import adele from '../../assets/images/adele/adele.png'

let array = {
	f50: {
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
			{ src: magritte,
			  type: "image"
			}
		], 
		name: "2019 | frog 50", 
		legend: {
			legend: "AR (Unity, Vuforia), C4D, iOS",
			url: "https://apps.apple.com/us/app/frog50/id1454069979",
			img: app,
			width: "100"
		}
	},
	vb: {
		images: [
			{
				src: vb,
				type: "image"
			},
			{
				title: "Victoria Beckham x Reebok campaign site",
				description: "The Victoria Beckham x Reebok collection was one of the first campaigns to utilize the new Reebok styleguide directed by frog. As a design technologist on the team, I was responsible for rapid prototype and full production code of the page. I worked closely with designers on concept, visual language, and interaction. I also worked closely with the Reebok development team to deploy the campaign on their site.",
				type: "html"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/vb-site.mov",
				type: "video"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/vb-mob.mp4",
				type: "video"
			}
		],
		name: "2019 | Victoria Beckham x Reebok",
		legend: {
			legend:"Web development, Vanilla JS, Jenkins, PHP",
			url: "https://www.reebok.com/us/victoriabeckham",
			img: web,
			width: "18",
			link: "Live Site"
		}
	},
	reebok: {
		images: [
			{
				src: reebok,
				type: "image"
			},
			{
				title: "Reebok VR Experience",
				description: "I made an immersive VR experience that reflects the new style guide for Reebok. Closely collaborated with a visual designer, we turned the keynote deck into 3 VR “rooms” with each room taking on key point that was inspired by 3 staple sneakers from Reebok: the Classic, the Pump, and the Freestyle. The experience was developed on Oculus Rift then later translated onto Oculus Go for ease of sharing.",
				type: "html"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/home.mp4",
				type: "video"
			},
			{
				src: workoutIntro,
				type: "image"
			},
			{
				src: workoutFP,
				type: "image"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/workout.mp4",
				type: "video"
			},
			{	
				src: pumpIntro,
				type: "image"
			},
			{
				src: pumpFP,
				type: "image"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/pump.mp4",
				type: "video"
			},
			{
				src: freestyleIntro,
				type: "image"
			},
			{
				src: freestyleFP,
				type: "image"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/freestyle.mp4",
				type: "video"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/vr_doc.mp4",
				type: "video"
			},
			{
				src: go,
				type: "image"
			}
		],
		name: "2018 | Reebok VR Experience",
		legend: {
			legend: "VR, Unity Engine, Oculus Go, Oculus Rift"
		}
	},
	cc: {
		images: [
			{
				src: cc,
				type: "image"
			},
			{
				title: "Creative Coding Sketches",
				description: "A collection of creative coding sketches done using various libraries including three.js, shaders, and p5.js. It is a personal endeavor to sketch in code from time to time to stay alive and creative. See the repo below for code.",
				type: "html"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/cc_2.mp4",
				type: "video"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/cc_3.mov",
				type: "video"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/cc_4.mov",
				type: "video"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/cc_5.mov",
				type: "video"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/cc_6.mov",
				type: "video"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/cc_7.mov",
				type: "video"
			}
		],
		name: "2015 - Present | Creative Coding Sketches",
		legend: {
			legend: "Three.js, p5.js, shaders, GLSL",
			url: "https://github.com/wipaweeeeee/shaderLab",
			img: gh,
			width: "18",
			link: "See Repo"
		}
	},
	flamingo: {
		images: [
			{
				src: flamingo,
				type: "image"
			},
			{
				title: "Florida Blue Digital Member Portal",
				description: "Florida Blue came to frog for a digital face lift both visually and experientially. As for my part in the team, I was responsible for creating the design language system in code as well as the coded demo pages. The demo flows included registration, dashboard, navigation, find care, get care, visits, benefits, plan activity and discover your plan. Unfortunately, the only flow that is live as of now is the discover your plan flow which you will see in next slides. The rest is confidential and will remain locked content for now. The project was developed using React.",
				type: "html"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/flamingo-intro.mp4",
				type: "video"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/flamingo-basic.mp4",
				type: "video"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/flamingo-tips.mp4",
				type: "video"
			}
		],
		name: "2019 | Florida Blue Digital Member Portal",
		legend: {
			legend: "React, Sketch, GSAP and many other animation libraries",
			url: "https://welcometoyourplan.floridablue.com/",
			img: web,
			width: "18",
			link: "Live Site"
		}
	},
	eye: {
		images: [
			{
				src: eye,
				type: "image"
			}, 
			{
				title: "Blink of an Eye", 
				description: "Blink of an Eye is an interactive pop-up window display conceived as a comment on the concept of Time, specifically the “right now” aspect of it. The big googly eye was on display at the NYU Skirball Center in Greenwich Village in Manhattan from November 8-14, 2016. People walking by were encouraged to text the eye their instagram handle. Once they did, the eye would blink then displayed rapid reel of their instagram feed then blink again and return to their blank state. It was an effort to show how fast time and memories can go by in a literal blink of an eye ( we love puns ). I was responsible for the software part of this project, mainly scraping instagram, making socket.io calls to the web and the motors, and making sure we received all the texts from Twillio.",
				type: "html"
			},
			{
				src: "https://wipawe-portfolio.s3.amazonaws.com/eye.mp4",
				type: "video"
			}
		],
		name: "2016 | Interactive Pop Up Window Display - Blink of an Eye",
		legend: {
			legend: "Arduino, Node.js, Socket.io, Twillio, Express, Plywood, Acrylic, Paint, Motors",
			url: "https://github.com/wipaweeeeee/blinkofaneye",
			img: gh,
			width: "18",
			link: "See Repo"
		}
	},
	adele: {
		images: [
			{
				src: adele,
				type: "image"
			},
			{
				title: "Call me Adele - A Romantic Data Visualization Piece",
				description: "This is a personal project where I turned my sorrows into a dataset. I made a data visualization series to display the downfall of my relationship. Rather heartbreaking yet insightful, the dataset gathered from text messages between my ex-boyfriend and I seemed to know the relationship was doomed. You can read more about the process in the elaborated medium post I wrote, link below.",
				type: "html"
			}
		],
		name: "2016 | Romantic Data Visualization - Call me Adele",
		legend: {
			legend: "Rita.js, Rune.js, Epson Ultra Premium Presentation Papers",
			url: "https://medium.com/@wipaweeeeee/call-me-adele-f37162b6ffe5",
			img: web,
			width: "18",
			link: "Medium Post"
		}
	}
};

const Landing = (props) => {
	const [ project, setProject ] = useState();
	const [ content, setContent] = useState();

	const handleShowProject = (e, project) => {
		setProject(project);
		setContent(null);
	}

	const handleClick = (e, content) => {
		setContent({content: content.images, name: content.name, legend: content.legend});
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
							onClick={(e) => handleClick(e, array.f50)} 
							onMouseOver={(e) => handleShowProject(e, f50)}
							className={classNames({"active" : content && content.name === "2019 | frog 50"})}
						>
							frog50
						</a>
					</li>
					<li>
						<a 
							onClick={(e) => handleClick(e, array.vb)} 
							onMouseOver={(e) => handleShowProject(e, vb)}
							className={classNames({"active" : content && content.name === "2019 | Victoria Beckham x Reebok"})}
						>
							VB x Reebok
						</a>
						</li>
					<li><a 
							onClick={(e) => handleClick(e, array.reebok)} 
							onMouseOver={(e) => handleShowProject(e, reebok)}
							className={classNames({"active" : content && content.name === "2018 | Reebok VR Experience"})}
						>
								Reebok
						</a></li>
					<li><a 
							onClick={(e) => handleClick(e, array.cc)} 
							onMouseOver={(e) => handleShowProject(e, cc)}
							className={classNames({"active" : content && content.name === "2015 - Present | Creative Coding Sketches"})}
						>
							Creative Coding
						</a>
					</li>
					<li>
						<a
							onClick={(e) => handleClick(e, array.flamingo)} 
							onMouseOver={(e) => handleShowProject(e, flamingo)}
							className={classNames({"active" : content && content.name === "2019 | Florida Blue Digital Member Portal"})}
						>
							Project Flamingo
						</a>
					</li>
					<li>
						<a
							onClick={(e) => handleClick(e, array.eye)} 
							onMouseOver={(e) => handleShowProject(e, eye)}
							className={classNames({"active" : content && content.name === "2016 | Interactive Pop Up Window Display - Blink of an Eye"})}
						>
							Blink of an Eye
						</a>
					</li>
					<li>
						<a
							onClick={(e) => handleClick(e, array.adele)} 
							onMouseOver={(e) => handleShowProject(e, adele)}
							className={classNames({"active" : content && content.name === "2016 | Romantic Data Visualization - Call me Adele"})}
						>
							Call me Adele
						</a>
					</li>
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