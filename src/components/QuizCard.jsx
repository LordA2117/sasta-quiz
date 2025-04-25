import './QuizCard.css';

function QuizCard (props) {
	return (
		<div className='question-card'>	
			<p className='question-number jetbrains-mono-light-300'>  [>_] Question Number {props.question_number} </p>
			<p className='question-category jetbrains-mono-light-300'> [#] {props.question_category} </p>
			<br />
			<h3 className='question-text jetbrains-mono-medium-500 typewriter'> {props.question_text} </h3>
		</div>
	);
}

export default QuizCard;
