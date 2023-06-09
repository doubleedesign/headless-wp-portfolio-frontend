import React, { FC } from 'react';
import styles from './LoadingScreen.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faRocketLaunch } from '@fortawesome/pro-duotone-svg-icons';


interface LoadingScreenProps {
	loaded: boolean
}

const LoadingScreen: FC<LoadingScreenProps> = ({ loaded }) => {
	return (
		<div className={styles.LoadingScreen} data-loaded={loaded}>
			<FontAwesomeIcon icon={faRocket} />
			<FontAwesomeIcon icon={faRocketLaunch} />
			<p className={styles.text}>Preparing for takeoff&hellip;</p>
		</div>
	);
};

export default LoadingScreen;
