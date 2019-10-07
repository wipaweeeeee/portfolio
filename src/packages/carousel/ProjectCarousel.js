import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./ProjectCarousel.scss";

const ProjectCarousel = (props) => {
	let content = props.content && props.content.map((item, index) => {
		return <div key={index}><img src={item} /></div>
	})

	return (
		<React.Fragment>
			<div className="carousel-intro">{props.name}</div>
			<Carousel 
				showThumbs={false}
				infiniteLoop={true}
				showIndicators={false}
				showStatus={false}>
	            {content}
	        </Carousel>
	        <div className="carousel-legend">{props.legend}</div>
	    </React.Fragment>
	)
}

export default ProjectCarousel;