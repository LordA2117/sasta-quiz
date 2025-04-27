import { useState, useEffect, useMemo } from 'react';
import './App.css'
import QuizCard from './components/QuizCard';
import CorrectCard from './components/CorrectCard';
import WrongCard from './components/WrongCard';
import LoginCard from './components/LoginCard';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from './components/particlesConfig';

function App() {
	const [userScore, setUserScore] = useState(0);
	const [totalScore, setTotalScore] = useState(0); // Total score of all the questions so far
	const [index, setIndex] = useState(0); // Question number
	const [answerState, setAnswerState] = useState(false); // Answer is wrong or right (false or true)
	const [init, setInit] = useState(false);

	useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
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

  return (
    <div className='App'>
			<Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
			<section className='content'>
				<LoginCard />
			</section>
    </div>
  )
}

export default App;

// Used lottiefiles for animations, very cool shi
// Implement the final scorecard, finish the app and also see if there are any better particle configs that will suit this, because this seems a little tacky.
