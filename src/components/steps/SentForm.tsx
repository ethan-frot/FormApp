const SentForm = ({ formData }: { formData: { email: string; name: string; } }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <img src="../../../public/form-checked.svg" alt="form-checked" />
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="font-bold text-3xl">Bien joué, {formData.name} !</h1>
                <h1 className="font-bold text-3xl">Le formulaire a été rempli avec succès.</h1>
                <h1 className="font-bold text-3xl text-center">
                    Un email de confirmation vous a été envoyé à l'adresse suivante : <br /> {formData.email}
                </h1>
            </div>
        </div>
    );
};

export default SentForm;
