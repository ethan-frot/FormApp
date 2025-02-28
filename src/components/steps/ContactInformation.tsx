import React from "react";
import Input from "../ui/Input.tsx";
import ButtonPrevious from "../ui/Buttons/ButtonPrevious.tsx";
import ButtonNext from "../ui/Buttons/ButtonNext.tsx";

type ProfileDataTypeProps = {
    currentStep: number;
    setCurrentStep: (currentStep: (prevStep: number) => number) => void;
    formData: { email: string; phoneNumber: string; };
    setFormData: (data: any) => void;
}

const ContactInformation = ({currentStep, setCurrentStep, formData, setFormData}: ProfileDataTypeProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <Input type="email" placeholder="jhon.doe@gmail.com" name="email" label="Email" value={formData.email}
                   onChange={handleChange}/>
            <Input type="text" placeholder="+33 ou 06..." name="phoneNumber" label="Phone number"
                   value={formData.phoneNumber}
                   pattern="^(?:\+33|0)[1-9](?:\d{2}){4}$"
                   title="Veuillez entrer un numéro de téléphone français valide, exemple : +33612345678 ou 0612345678"
                   onChange={handleChange}/>
            <div className="flex justify-end gap-2">
                <ButtonPrevious currentStep={currentStep} setCurrentStep={setCurrentStep}/>
                <ButtonNext type='submit' currentStep={currentStep} setCurrentStep={setCurrentStep}/>
            </div>
        </form>
    )
        ;
};

export default ContactInformation;
