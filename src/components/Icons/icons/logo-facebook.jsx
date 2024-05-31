import React from 'react';

function LogoFacebook(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g>
		<circle cx="24" cy="24" fill="#1877f2" r="23"/>
		<path d="M32.953,30.648,33.973,24H27.594V19.686c0-1.819.891-3.592,3.748-3.592h2.9v-5.66a35.306,35.306,0,0,0-5.148-.45c-5.254,0-8.688,3.184-8.688,8.949V24h-5.84v6.648h5.84V46.72a23.206,23.206,0,0,0,7.188,0V30.648Z" fill="#fff"/>
	</g>
</svg>
	);
};

export default LogoFacebook;