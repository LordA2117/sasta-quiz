import './ScoreCard.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ScoreCard(props) {
	const user_percentage = ((props.userscore/props.totalscore)*100).toFixed(1);
	let text = 'noob';
	if (user_percentage <= 25) {
		text = 'noob';
	} else if (user_percentage <= 50) {
		text = 'skid';
	} else if (user_percentage <= 75) {
		text = 'normie';
	} else {
		text='nerd';
	}
	let win = '[-] Took that L dawg, next time noob';
	if (text==='nerd') {
		win = '[+] Just proved my point nerd (or are you a cheater? Idgaf either way)'
	}
	return(
		<div className='scoreboard'>
			<div className='percentage'>
				<CircularProgressbar 
					value={user_percentage} 
					text={`${user_percentage}%`} 
					className='jetbrains-mono-medium-500'
					styles={buildStyles({
						pathColor: `#c0fe04`,
						textColor: `#c0fe04`,
					})}
				/>
			</div>
			<div className='comment jetbrains-mono-medium-500'>[+] Rank: {text}</div>
			<div className='sidenote jetbrains-mono-regular-400'>{win}</div>
		</div>
	);
}

export default ScoreCard;
