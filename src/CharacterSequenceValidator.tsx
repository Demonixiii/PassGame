function PasswordSequenceValidator(
    {
        password,
    }:{
        password: string;
    }
) {

    const count:number = (password.match(/[a-z][A-Z][0-9][!@#$%^&*]/g) || []).length

    return (
        <>
            <section id="password-seq-validator-section">
                <div className="h-30 w-45 flex flex-col items-center justify-center gap-2">
                    <p className="font-bold">Nalezeno {count} sekvencí</p>
                    <p className="text-xs">[a-z][A-Z][0-9][!@#$%^&*]</p>
                </div>
            </section>
        </>
    )
}

export default PasswordSequenceValidator