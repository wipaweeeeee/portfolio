import React, { useState, useEffect } from 'react'; 
import Masonry from 'react-masonry-css'
import styles from './archive.module.scss';

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
		
		var base = new Airtable({apiKey: 'keywJEKrRFRrPEmMI'}).base('appS0UCDSYim1dOsM');
		base('Work').select().eachPage(function page(records, fetchNextPage) {

		    records.forEach(function(record) {
		    	let type = record.get('type');
		    	if (type === "archive") {
		    		allContent.push(record);
		    	}
		    });

		    fetchNextPage();

		}, function done(err) {
		    if (err) { console.error(err); return; }
		    setContent(allContent);

		});
	}	

	useEffect(() => {
		retrieveContent();
	}, []);
	
	const GenerateContent = () => {
		let masonry = [];

		content.map((item, index) => {
			if (item.fields.attachments) {
				let src = item.fields.attachments[0].url;
				masonry.push( <img key={index} src={src}/> )
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
		<GenerateContent />
	)
}

export default Archive;