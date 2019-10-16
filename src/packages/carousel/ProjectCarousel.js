import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./ProjectCarousel.scss";
import app from '../../assets/images/dl.png';

const ProjectCarousel = (props) => {
	let content = props.content && props.content.map((item, index) => {
		return ( 
			<div key={index}>
				{item.type == "image" && <img src={item.src} />}
				{item.type == "html" && <div style={{padding: '0 32px'}}><h3>{item.title}</h3><p>{item.description}</p></div>}
				{item.type == "video" && <video controls autoPlay muted><source src={item.src} type="video/mp4"/></video>}
			</div> 

		)
	})

	return (
		<div>
			<div className="carousel-intro">{props.name}</div>
			<Carousel 
				showThumbs={false}
				infiniteLoop={true}
				showIndicators={false}
				showStatus={false}>
	            {content}
	        </Carousel>
	        <div className="carousel-legend">
	        	{props.legend}
	        	{props.app && 
	        		<div style={{marginTop: '12px'}}>
	        			<a href="https://apps.apple.com/us/app/frog50/id1454069979" target="_blank" className="noLine"><img src={app} width="100" height="auto" alt="download on app store"/></a>
	        		</div> 
	        	}
	        </div>
	    </div>
	)
}

export default ProjectCarousel;