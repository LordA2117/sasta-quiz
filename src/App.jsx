import './App.css'
import QuizCard from './components/QuizCard';

function App() {

  return (
    <div>
			<QuizCard question_number = {1} question_text={"How many cells are there in a human body? "} question_category={"Entertainment: Anime & Manga"} />	
    </div>
  )
}

export default App;

//TODO: We'll source 10 mcq's using this url https://opentdb.com/api.php?amount=10&type=multiple
//This will give us 10 mcq to work with and we can render question like that.
