import React, { useState, useEffect } from 'react'; 
import Masonry from 'react-masonry-css'
import styles from './archive.module.scss';
import classNames from 'classnames';
import Banner from '../border/index';

var Airtable = require('airtable');

const Archive = () => {

	const [ content, setContent ] = useState([]);
	const breakpointColumnsObj = {
	  default: 3,
	  1200: 3,
	  1000: 2,
	  500: 1
	};

	var allContent = [];

	const retrieveContent = () => {
		
		var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE);
		base('Work').select().eachPage(function page(records, fetchNextPage) {

		    records.forEach(function(record) {
		    	allContent.push(record);
		    });

		    fetchNextPage();

		}, function done(err) {
		    if (err) { console.error(err); return; }
		    setContent(allContent.sort((a,b) => a.fields.order - b.fields.order));
 
		});
	}	

	useEffect(() => {
		retrieveContent();
	}, []);
	

	// console.log(content)

	const GenerateContent = () => {
		let masonry = [];

		content.map((item, index) => {
			if (item.fields.attachments) {
				// let src = item.fields.attachments[0].url;
				let src = "/images/archive/" + item.fields.attachments[0].filename;
				let title = item.fields.title;
				let description = item.fields.description;
				masonry.push( 
					<div key={index} className={styles.tile}>
						<div className={styles.text}>
							<p>{title}<br />{description}</p>
						</div>
						<img key={index} src={src}/> 
					</div>
				)
			}
			
		})

		return (
			<Masonry
			  breakpointCols={breakpointColumnsObj}
			  className={styles.grid}
			  columnClassName={styles.column}>
	  			{masonry}
	  		</Masonry>
		)

	}

	return (
		<div>
			<Banner />
			<div className={styles.intro}>
				<a href="/">&larr; Back</a>
				<h1>An archive of unpublished / unrelated / experimental work</h1>
			</div>
			<GenerateContent />
		</div>
	)
}

export default Archive;