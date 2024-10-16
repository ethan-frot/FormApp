import React from "react";
import ButtonAccountType from "../ui/Buttons/ButtonAccountType.tsx";
import ButtonNext from "../ui/Buttons/ButtonNext.tsx";

type AccountTypeProps = {
    currentStep: number;
    setCurrentStep: (currentStep: (prevStep: number) => number) => void;
    formData: { accountType: string | null };
    setFormData: React.Dispatch<React.SetStateAction<{ accountType: string | null }>>;
};

const AccountType = ({currentStep, setCurrentStep, formData, setFormData}: AccountTypeProps) => {
    const handleSelect = (type: string) => {
        setFormData((prevData) => ({
            ...prevData,
            accountType: type,
        }));
    };

    return (
        <div>
            <p className="text-gray-300">Choose your account type</p>
            <div className="flex flex-col py-7 gap-5">
                <div className="flex">
                    <ButtonAccountType
                        isSelected={formData.accountType === 'Personal'}
                        onClick={() => handleSelect('Personal')}
                    />
                    <div className="ml-5">
                        <h3 className="font-bold">Personal Account</h3>
                        <p className="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur radicalising elit.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <ButtonAccountType
                        isSelected={formData.accountType === 'Business'}
                        onClick={() => handleSelect('Business')}
                    />
                    <div className="ml-5">
                        <h3 className="font-bold">Business Account</h3>
                        <p className="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur radicalising elit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <ButtonNext
                    type='button'
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            </div>
        </div>
    );
};

export default AccountType;
