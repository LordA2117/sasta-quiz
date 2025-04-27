import { useEffect, useState, useRef } from 'react';
import './QuizCard.css';
import DataDisplay from './DataDisplay';

function htmlDecode(input) {
	var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const capitalize = s => s && String(s[0]).toUpperCase() + String(s).slice(1);

function QuizCard(props) {
	const [question, setQuestion] = useState({});
	const [options, setOptions] = useState([]);
	const hasFetched = useRef(false);
	const url = "https://opentdb.com/api.php?amount=1&type=multiple";
	//TODO: Send a callback function to globally alter the scores and shii

	useEffect(() => {
		if (hasFetched.current) return;
		hasFetched.current = true;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				const fetchedQuestion = data.results[0];
				setQuestion(fetchedQuestion);

				const correct_answer = fetchedQuestion["correct_answer"];
				const incorrect_answers = fetchedQuestion["incorrect_answers"];
				incorrect_answers.push(correct_answer);
				const shuffledOptions = incorrect_answers.sort(() => Math.random() - 0.5);
				setOptions(shuffledOptions);
			});
	}, []);

	let ques_string = "";
	if (typeof question['question'] !== 'undefined') {
		ques_string = question['question'];
	} else {
		ques_string = 'Waiting...';
	}

	return (
		<div className='question-card'>
			<DataDisplay username={props.username} totalscore={props.total_score} userscore={props.user_score} />
			<p className='question-number jetbrains-mono-light-300'> [{'>'}_] Question Number {props.question_number}/10 </p>
			<p className='question-category jetbrains-mono-light-300'> [#] {htmlDecode(question["category"])} </p>
			<p className='question-difficulty jetbrains-mono-light-300'> [~] {capitalize(question["difficulty"])} </p>
			<h3 className='question-text jetbrains-mono-medium-500'>{htmlDecode(ques_string)}</h3>
			<div className='options'>
				<table className='options-table'>
					<tbody>
						<tr>
							<td>
								{options[0] && (
									<span className='jetbrains-mono-regular-400'>
										<input type='radio' name='option' value={options[0]} id={options[0]} />
										<label htmlFor={options[0]}>{htmlDecode(options[0])}</label>
									</span>
								)}
							</td>
							<td>
								{options[1] && (
									<span className='jetbrains-mono-regular-400'>
										<input type='radio' name='option' value={options[1]} id={options[1]} />
										<label htmlFor={options[1]}>{htmlDecode(options[1])}</label>
									</span>
								)}
							</td>
						</tr>
						<tr>
							<td>
								{options[2] && (
									<span className='jetbrains-mono-regular-400'>
										<input type='radio' name='option' value={options[2]} id={options[2]} />
										<label htmlFor={options[2]}>{htmlDecode(options[2])}</label>
									</span>
								)}
							</td>
							<td>
								{options[3] && (
									<span className='jetbrains-mono-regular-400'>
										<input type='radio' name='option' value={options[3]} id={options[3]} />
										<label htmlFor={options[3]}>{htmlDecode(options[3])}</label>
									</span>
								)}
							</td>
						</tr>
					</tbody>
				</table>
				<button className='submit-button jetbrains-mono-regular-400' onClick={
					() => {
						const user_answer = document.querySelector('input[name="option"]:checked').value;
						console.log(user_answer);
						if (user_answer == question['correct_answer']) {
							props.set_index(2);
							if (question["difficulty"] == 'easy') {
								props.set_user_score(props.user_score + 100);
								props.set_total_score(props.total_score + 100);
							} else if(question["difficulty"] == 'medium') {
								props.set_user_score(props.user_score + 250);
								props.set_total_score(props.total_score + 250);
							} else {
								props.set_user_score(props.user_score + 500);
								props.set_total_score(props.total_score + 500);
							}
						} else {
							props.set_index(3);
							if (question["difficulty"] == 'easy') {
								props.set_total_score(props.total_score + 100);
							} else if(question["difficulty"] == 'medium') {
								props.set_total_score(props.total_score + 250);
							} else {
								props.set_total_score(props.total_score + 500);
							}
						}
					}
				}>Go -{'>'}</button>
			</div>
		</div>
	);
}

export default QuizCard;

// The kindness of StackOverflow is insane tbh
// https://stackoverflow.com/questions/15839169/how-to-get-the-value-of-a-selected-radio-button
