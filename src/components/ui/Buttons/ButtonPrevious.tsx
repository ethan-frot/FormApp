type ButtonPreviousProps = {
    currentStep: number;
    setCurrentStep: (currentStep: number) => void;
}

const ButtonPrevious = ({ currentStep, setCurrentStep }: ButtonPreviousProps) => {
    const previousStep = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <div className="flex pt-10 justify-center items-end flex-col">
            <button
                className="text-gray-300 px-4 py-2"
                onClick={previousStep}
            >
                Previous
            </button>
        </div>
    )
}

export default ButtonPrevious;