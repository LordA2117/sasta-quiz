import './LoginCard.css';

function LoginCard(props) {
	return (
		<div className='login-card'>
			<div className='credentials'><span className='user jetbrains-mono-regular-400'>[{'>'}_] {props.username}</span> <span className='score jetbrains-mono-regular-400'>[o] {props.userscore}/{props.totalscore}</span></div>
			<h1 className='title jetbrains-mono-medium-500'>[+] Sasta Quiz</h1>
			<h3 className='subtitle jetbrains-mono-regular-400'>[#] Do you have what it takes to win?</h3>
			<span id='credentials'><label for='username' className='username-label jetbrains-mono-regular-400'>[*] Username: </label><input className='username-input jetbrains-mono-regular-400' name='username' id='username' /></span><br /><br />
			<button className='submit-button jetbrains-mono-regular-400' onClick={
				() =>{
					props.set_username(document.querySelector('#username').value);
					props.set_index(1);
				}
			}>
				Go -{'>'}
			</button>
		</div>
	);
}

export default LoginCard;
