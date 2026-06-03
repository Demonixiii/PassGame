import {useEffect} from "react";

function PasswordStrength(
    {
        password,
        completionTime,
        setCompletionTime,
    }:{
        password: string
        completionTime: number
        setCompletionTime: (completionTime: number) => void
    }
) {
    const hasMinLength: boolean = password.length >= 8
    const hasUppercaseLetter: boolean = /[A-Z]/.test(password)
    const hasNumber: boolean = /[0-9]/.test(password)
    const hasSpecialSymbol: boolean = /[!@#$%^&*]/.test(password)

    const passwordScore: number =
        Number(hasMinLength) +
        Number(hasUppercaseLetter) +
        Number(hasNumber) +
        Number(hasSpecialSymbol)

    useEffect(() => {
        if (passwordScore === 4 && completionTime === -1) {
            setCompletionTime(Date.now())
        }

        if (passwordScore !== 4) {
            setCompletionTime(-1)
        }
    }, [passwordScore, completionTime, setCompletionTime])

    const completeColor: string = "green"
    const incompleteColor: string = "red"

    let strengthLabel: string = "Slabé"
    let barColor: string = incompleteColor

    if (passwordScore === 2 && hasMinLength || passwordScore === 3) {
        strengthLabel = "Střední"
        barColor = "#d98d1c"
        }
    if (passwordScore === 4 ) {
        strengthLabel = "Silné"
        barColor = completeColor
    }

    useEffect(() => {
        document.title = `Síla hesla: ${strengthLabel}`;
    }, [strengthLabel]);

    return (
        <>
            <section id="password-strength-section">
                <div className="border-2 border-pink-400 p-2 rounded-2xl flex flex-col items-center justify-center">
                    <div className="criteria">
                        <p style={{ color: hasMinLength ? completeColor : incompleteColor }}>
                            {hasMinLength ? "Heslo je dostatečně dlouhé" : "Délka musí být minimálně 8 znaků"}
                        </p>
                        <p style={{ color: hasUppercaseLetter ? completeColor : incompleteColor }}>
                            {hasUppercaseLetter ? "Obsahuje alespoň jedno velké písmeno" : "Musí obsahovat velké písmeno"}
                        </p>
                        <p style={{ color: hasNumber ? completeColor : incompleteColor }}>
                            {hasNumber ? "Obsahuje alespoň jedno číslo" : "Musí obsahovat číslo"}
                        </p>
                        <p style={{ color: hasSpecialSymbol ? completeColor : incompleteColor }}>
                            {hasSpecialSymbol ? "Obsahuje speciální znak" : "Musí obsahovat specílní znak: !@#$%^&*"}
                        </p>
                    </div>
                    <div className="password-strength">
                        <div className="strength-bar" style={{ backgroundColor: barColor }}></div>
                        <p style={{ color: barColor }}>{strengthLabel}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PasswordStrength