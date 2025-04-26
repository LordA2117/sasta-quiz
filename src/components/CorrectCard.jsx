import './CorrectCard.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function CorrectCard () {
	return(
		<div className='correct'>
			<DotLottieReact
				src="https://lottie.host/d2acfce7-4fb3-4876-abab-3edd504f51ac/WFNnRleAPn.lottie"
				autoplay
    	/>
			<p className='congrats-message jetbrains-mono-medium-500'> [+] You got the answer right! </p>
		</div>
	);
}

export default CorrectCard;
