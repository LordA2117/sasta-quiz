import './DataDisplay.css';

function DataDisplay(props) {
	return(
		<div className='data-display'><span className='user jetbrains-mono-regular-400'>[-_-] {props.username}</span> <span className='score jetbrains-mono-regular-400'>[!] {props.userscore}/{props.totalscore}</span></div>
	);
}

export default DataDisplay;
