import React from "react";
import Input from "../ui/Input.tsx";
import ButtonPrevious from "../ui/Buttons/ButtonPrevious.tsx";
import ButtonNext from "../ui/Buttons/ButtonNext.tsx";

type PersonalInformationTypeProps = {
    currentStep: number;
    setCurrentStep: (currentStep: (prevStep: number) => number) => void;
    formData: { name: string; email: string; password: string; };
    setFormData: (data: any) => void;
}

const PersonalInformation = ({currentStep, setCurrentStep, formData, setFormData}: PersonalInformationTypeProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <Input type="text" placeholder="Jhon Doe" name="name" label="Name" value={formData.name} onChange={handleChange} />
            <Input type="email" placeholder="johndoe@gmail.com" name="email" label="Email" value={formData.email} onChange={handleChange} />
            <Input type="password" placeholder="********" name="password" label="Password" value={formData.password} onChange={handleChange}  />
            <div className="flex justify-end gap-2">
                <ButtonPrevious currentStep={currentStep} setCurrentStep={setCurrentStep} />
                <ButtonNext type='submit' currentStep={currentStep} setCurrentStep={setCurrentStep} />
            </div>
        </form>
    );
};

export default PersonalInformation;
