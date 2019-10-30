import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./ProjectCarousel.scss";

const ProjectCarousel = (props) => {
	let content = props.content && props.content.map((item, index) => {
		return ( 
			<React.Fragment key={index + item.src}>
				{item.type === "image" && <img key={item.type + index} src={item.src}/>}
				{item.type === "html" && <div key={item.type + index} style={{padding: '0 32px'}}><h3>{item.title}</h3><p>{item.description}</p></div>}
				{item.type === "video" && <video key={item.type + index} autoPlay muted loop><source src={item.src} type="video/mp4"/></video>}
			</React.Fragment> 
		)
	})

	const [ slide, setSlide ] = useState(0);
	let max = props.content && props.content.length;

	useEffect(() => {
		setSlide(0);
	},[props.name])


	const handleClick = () => {
		if (slide < max) {
			setSlide(slide + 1);
		} else { 
			setSlide(0)
		}
	}

	return (
		<div className="carousel-container">
			<div className="carousel-intro">{props.name}</div>
			<Carousel 
				showThumbs={false}
				infiniteLoop={true}
				showIndicators={false}
				showStatus={true}
				selectedItem={slide}
				emulateTouch={true}
				onChange={handleClick}>
	            {content}
	        </Carousel>
	        {props.legend && <div className="carousel-legend">
	        	{props.legend.legend}
        		<div style={{marginTop: '12px'}}>
        			<a href={props.legend.url} target="_blank" className="noLine center">
	        			{ props.legend.img && <img src={props.legend.img} width={props.legend.width} height="auto" alt="go to link"/> }
	        			{props.legend.link}
        			</a>
        		</div> 
	        </div>}
	    </div>
	)
}

export default ProjectCarousel;