import { useState, useEffect, useMemo } from 'react';
import './App.css'
import QuizCard from './components/QuizCard';
import CorrectCard from './components/CorrectCard';
import WrongCard from './components/WrongCard';
import LoginCard from './components/LoginCard';
import ScoreCard from './components/ScoreCard';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from './components/particlesConfig';

function getRandomUsername() {
	const usernames = ['TRON', 'CLU', 'Rinzler', 'Kevin Flynn', 'Sam', 'Quorra', 'Alan Bradley'];
	const randomIndex = Math.floor(Math.random() * usernames.length);
	return usernames[randomIndex];
}

function App() {
	const [userScore, setUserScore] = useState(0);
	const [totalScore, setTotalScore] = useState(0); // Total score of all the questions so far
	const [questionNumber, setQuestionNumber] = useState(0); // Question number
	const [init, setInit] = useState(false);
	const [username, setUsername] = useState('CLU');
	const [index, setIndex] = useState(0);
	const components = [
		<LoginCard set_username={setUsername} username={username} totalscore={totalScore} userscore={userScore} set_index={setIndex}/>,
		<QuizCard question_number={questionNumber + 1} set_index={setIndex} user_score={userScore} set_user_score={setUserScore} total_score={totalScore} set_total_score={setTotalScore} username={username}/>, 
		<CorrectCard set_question_number={setQuestionNumber} set_index={setIndex} question_number={questionNumber}/>, 
		<WrongCard set_question_number={setQuestionNumber} set_index={setIndex} question_number={questionNumber}/>,
		<ScoreCard userscore={userScore} totalscore={totalScore} />
	];
	
	if (!username) {
		setUsername(getRandomUsername());
	}

	useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

	const particlesLoaded = (container) => {
    console.log(container);
  };

	const options = useMemo(
		() => (particlesConfig));	

	let component = components[index];
	
	if (questionNumber >= 10) {
		component = components[4];
	} else {
		component = components[index];
	}

  return (
    <div className='App'>
			<Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
			<section className='content'>
				{component}
			</section>
    </div>
  )
}

export default App;

// Used lottiefiles for animations, very cool shi
// Implement the final scorecard, finish the app and also see if there are any better particle configs that will suit this, because this seems a little tacky.
