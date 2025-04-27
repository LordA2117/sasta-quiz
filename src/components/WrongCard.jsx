import './WrongCard.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function WrongCard (props) {
	return(
		<div className='wrong'>
			<DotLottieReact
				src="https://lottie.host/4731df5b-6eaa-4902-8027-714858682bac/2NwRDQ1qy4.lottie"
				autoplay
			/>
			<p className='wrong-message jetbrains-mono-medium-500'>[-] You got the answer wrong </p>
			<button className='submit-button jetbrains-mono-regular-400' onClick={
				() => {
					props.set_question_number(props.question_number + 1);
					props.set_index(1);
				}	
			}>Go -{'>'}</button>
	</div>
	);
}

export default WrongCard;
