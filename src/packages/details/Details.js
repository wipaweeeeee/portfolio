import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

const Details = (props) => {

	let data = props.content[0];
	let hero = data && data.details_hero && data.details_hero[0].url;
	let heroType = data && data.details_hero && data.details_hero[0].type;
	let heroBg = data && data.hero_color;

	return (
		<div className={classNames(styles.detailsContainer, {[styles.show] : props.show})}>
			<button onClick={props.close} className={styles.close}>Close X</button>
			<div className={styles.intro}>
				<div className={styles.left}>
					<span className={styles.label}>Title</span>
					<span className={styles.title}>{data && data.title}</span>

					<span className={styles.labelSm}>Medium</span>
					<p className={styles.bodySm}>{data && data.medium}</p>
				</div>
				<div className={styles.mid}>
					<span className={styles.label}>Details</span>
					<p className={styles.body}>{data && data.description}</p>
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
			</div>
		</div>
	)
}

export default Details;