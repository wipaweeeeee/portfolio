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

		const base = new Airtable({apiKey: `${process.env.REACT_APP_AIRTABLE_TOKEN}`}).base(`${process.env.REACT_APP_AIRTABLE_BASE}`);
		const table = base('Work');

		table.select({
		view: 'Grid view'
		}).firstPage( function(err, records) {
		if (err) { console.error(err); return; }

		let _data = [];

		records.forEach(function(record) {
			// console.log(record.fields)
			_data.push(record.fields)
		})

      	setContent(_data.sort((a,b) => a.order - b.order))
		
	}) 
}

	useEffect(() => {
		retrieveContent();
	}, []);
	

	// console.log(content)

	const GenerateContent = () => {
		let masonry = [];

		content.map((item, index) => {
			if (item.attachments) {
				// let src = item.attachments[0].url;
				let src = "/images/archive/" + item.attachments[0].filename;
				let title = item.title;
				let description = item.description;
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