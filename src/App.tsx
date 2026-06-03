import {useEffect, useState} from 'react'

import PasswordInput from "./PasswordInput.tsx";
import PasswordStrength from "./PasswordStrength.tsx";
import PasswordSequenceValidator from "./CharacterSequenceValidator.tsx";
import PasswordTimeValidator from "./PasswordTimeValidator.tsx";
import CountryFlagValidator from "./CountryFlagValidator.tsx";

function App() {
  const [password, setPassword] = useState("")
  const [completionTime, setCompletionTime] = useState(-1)
    const [appStartTime] = useState(() => Date.now())

    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setPassword(prevPassword => {

                const action = Math.random() < 0.5 ? 'add' : 'remove';
                if (action === 'add') {
                    return prevPassword + "😜";
                } else {
                    if (prevPassword.length === 0) return prevPassword;
                    const index = Math.floor(Math.random() * prevPassword.length);
                    return prevPassword.slice(0, index) + prevPassword.slice(index + 1);
                }
            });
        }, 10000);
        return () => clearInterval(sabotageInterval);
    }, []);

  return (
    <>
      <section id="main-section" className="bg-var[--primary-color] color-var[--text-color]">
        <div className="main-div">
          <PasswordInput password={password} setPassword={setPassword}></PasswordInput>
          <PasswordStrength password={password} completionTime={completionTime} setCompletionTime={setCompletionTime}></PasswordStrength>
            <div className="max-w-100 w-full flex flex-wrap justify-between border-2 border-pink-400 p-2 rounded-2xl">
                <PasswordSequenceValidator password={password}></PasswordSequenceValidator>
                <PasswordTimeValidator completionTime={completionTime} appStartTime={appStartTime}></PasswordTimeValidator>
            </div>
            <div className='w-96 flex items-center justify-center m-2'>
                <CountryFlagValidator password={password}></CountryFlagValidator>
            </div>
        </div>
      </section>
    </>
  )
}

export default App
