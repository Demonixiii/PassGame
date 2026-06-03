function PasswordTimeValidator(
    {
        appStartTime,
        completionTime,
    }:{

        appStartTime: number;
        completionTime: number;
    }
) {

    const timeTaken:number = (completionTime - appStartTime)/1000;

    return (
        <>
            <section id="password-seq-validator-section">
                <div className="h-30 w-45 flex flex-col items-center justify-center gap-2">
                    {completionTime !== -1 && (
                        <p>
                            {timeTaken < 5
                                ? "Heslo bylo zadáno příliš rychle: "
                                : "Doba zadávání: "}
                            {(timeTaken).toFixed(2)} s
                        </p>
                    )}
                </div>
            </section>
        </>
    )
}

export default PasswordTimeValidator