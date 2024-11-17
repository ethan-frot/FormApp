import React from "react";
import Input from "../ui/Input.tsx";
import ButtonNext from "../ui/Buttons/ButtonNext.tsx";

type PersonalInformationTypeProps = {
    currentStep: number;
    setCurrentStep: (currentStep: (prevStep: number) => number) => void;
    formData: { firstName: string; lastName: string; };
    setFormData: (data: any) => void;
}

const PersonalInformation = ({currentStep, setCurrentStep, formData, setFormData}: PersonalInformationTypeProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
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
            <Input type="text" placeholder="Jhon" name="firstName" label="First name" value={formData.firstName} onChange={handleChange} />
            <Input type="text" placeholder="Doe" name="lastName" label="Last name" value={formData.lastName} onChange={handleChange} />
            <div className="flex justify-end gap-2">
                <ButtonNext type='submit' currentStep={currentStep} setCurrentStep={setCurrentStep} />
            </div>
        </form>
    );
};

export default PersonalInformation;
