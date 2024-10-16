import React from "react";
import Input from "../ui/Input.tsx";
import ButtonPrevious from "../ui/Buttons/ButtonPrevious.tsx";
import ButtonNext from "../ui/Buttons/ButtonNext.tsx";

type ProfileDataTypeProps = {
    currentStep: number;
    setCurrentStep: (currentStep: (prevStep: number) => number) => void;
    formData: { age: string; areaOfInterest: string; description: string; };
    setFormData: (data: any) => void;
}

const ProfileData = ({currentStep, setCurrentStep, formData, setFormData}: ProfileDataTypeProps) => {
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
        <Input type="number" placeholder="20" name="age" label="Age" value={formData.age} onChange={handleChange}/>
        <Input type="text" placeholder="Frontend" name="areaOfInterest" label="Area of interest" value={formData.areaOfInterest} onChange={handleChange}/>
        <Input type="text" placeholder="Lorem ipsum" name="description" label="Bio / Description" value={formData.description} onChange={handleChange}/>
        <div className="flex justify-end gap-2">
            <ButtonPrevious currentStep={currentStep} setCurrentStep={setCurrentStep}/>
            <ButtonNext type='submit' currentStep={currentStep} setCurrentStep={setCurrentStep}/>
        </div>
    </form>
)
    ;
};

export default ProfileData;
