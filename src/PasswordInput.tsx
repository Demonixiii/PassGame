import {useState} from "react";

function PasswordInput(
    {
        password,
        setPassword,
    }: {
        password: string;
        setPassword: (password: string) => void;
    }
)   {
    const [isVisible, setIsVisible] = useState(false)

    /*
    const prevPassword:string = password;

    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setPassword(prevPassword: => {

                const action = Math.random() < 0.5 ? 'add' : 'remove';

                if (action === 'add') {
                    return prevPassword + "😜";
                } else {
                    if (prevPassword.length === 0) return prevPassword;
                    const index = Math.floor(Math.random() * prevPassword.length);
                    return prevPassword.slice(0, index) + prevPassword.slice(index + 1);
                }
            });

        }, 10000); // 10 sekund pro test; reálně 120000 ms (2 minuty)

        return () => clearInterval(sabotageInterval);

    }, []);

     */

    return (
        <>
            <section id="password-input-section">
                <div>
                    <input
                        type={isVisible ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-(--secondary-color) border rounded px-2 py-1"
                    />
                </div>

                <button onClick={() => setIsVisible(!isVisible)}
                        className="mt-2 min-w-24 bg-(--secondary-color) border rounded px-2 py-1 cursor-pointer"
                >
                    {isVisible ? "Skrýt" : "Zobrazit"}
                </button>

            </section>
        </>
    )
}

export default PasswordInput