import './CorrectCard.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function CorrectCard (props) {
	return(
		<div className='correct'>
			<DotLottieReact
				src="https://lottie.host/d2acfce7-4fb3-4876-abab-3edd504f51ac/WFNnRleAPn.lottie"
				autoplay
    	/>
			<p className='congrats-message jetbrains-mono-medium-500'> [+] You got the answer right! </p>
			<button className='submit-button jetbrains-mono-regular-400' onClick={
				() => {
					props.set_question_number(props.question_number + 1);
					props.set_index(1);
				}	
			}>Go -{'>'}</button>
		</div>
	);
}

export default CorrectCard;
