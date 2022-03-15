import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

const Details = (props) => {

	let data = props.content[0];
	let hero = data && data.details_hero && data.details_hero[0].url;
	let heroType = data && data.details_hero && data.details_hero[0].type;
	let heroBg = data && data.hero_color;
	let gridImages = data && data.images && data.images.map((item, index) => {
		return (
			<div key={index} className={styles.gridItem}><img src={item.url} /></div>
		)
	})

	useEffect(() => {
		window.scrollTo({
		  top: 0,
		  behavior: 'smooth'
		});
	},[])

	return (
		<div className={classNames(styles.detailsContainer, {[styles.show] : props.show})}>
			<div className={styles.intro}>
				<div className={styles.left}>
					<div>
						<span className={styles.label}>Title</span>
						<span className={styles.title}>{data && data.title}</span>
					</div>
					{	data && data.link &&
						<a href={data.link} target="_blank">🔗</a>
					}
				</div>
				<div className={styles.mid}>
					<span className={styles.label}>Details</span>
					<p className={styles.body}>{data && data.description}</p>
				</div>
				<div className={styles.right}>
					<span className={styles.label}>Medium</span>
					<p className={styles.body}>{data && data.medium}</p>
				</div>
			</div>
			<div className={styles.images}>
				<div className={styles.hero} style={{ backgroundColor: `#${heroBg}`}}>
					{
						heroType && heroType.indexOf("image") > -1 && 
						<img src={hero} />
					}
					{
						heroType && heroType.indexOf("video") > -1 && 
						<video muted autoPlay src={hero} />
					}
				</div>
				{
					gridImages && gridImages.length > 0 && 
					<div className={styles.grid}>
						{gridImages}
					</div>
				}
			</div>
		</div>
	)
}

export default Details;