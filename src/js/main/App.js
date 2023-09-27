import React, { useState } from 'react';
import '../../css/App.css';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const showLogin = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
  }

  const showSignUp = () => {
    setShowLoginForm(false);
    setShowSignUpForm(true);
  }

  const hideForms = () => {
    setShowLoginForm(false);
    setShowSignUpForm(false);
  }

  return (
    <div className="App">
      <h1>HouseTrack</h1>

      {(!showLoginForm && !showSignUpForm) && (
        <>
          <button onClick={showLogin}>Log In</button>
          <button onClick={showSignUp}>Sign Up</button>
        </>
      )}

      {showLoginForm && <Login hideForms={hideForms} />}
      {showSignUpForm && <SignUp hideForms={hideForms} />}
    </div>
  );
}

export default App;
