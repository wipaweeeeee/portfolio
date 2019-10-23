import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./ProjectCarousel.scss";

const ProjectCarousel = (props) => {
	console.log(props.legend.legend)
	let content = props.content && props.content.map((item, index) => {
		return ( 
			<React.Fragment key={index}>
				{item.type == "image" && <img src={item.src} />}
				{item.type == "html" && <div style={{padding: '0 32px'}}><h3>{item.title}</h3><p>{item.description}</p></div>}
				{item.type == "video" && <video autoPlay muted loop><source src={item.src} type="video/mp4"/></video>}
			</React.Fragment> 

		)
	})

	return (
		<div className="carousel-container">
			<div className="carousel-intro">{props.name}</div>
			<Carousel 
				showThumbs={false}
				infiniteLoop={true}
				showIndicators={false}
				showStatus={true}>
	            {content}
	        </Carousel>
	        <div className="carousel-legend">
	        	{props.legend.legend}
        		<div style={{marginTop: '12px'}}>
        			<a href={props.legend.url} target="_blank" className="noLine center">
	        			{ props.legend.img && <img src={props.legend.img} width={props.legend.width} height="auto" alt="go to link"/> }
	        			{props.legend.link}
        			</a>
        		</div> 
	        </div>
	    </div>
	)
}

export default ProjectCarousel;