type ButtonPreviousProps = {
    currentStep: number;
    setCurrentStep: (currentStep: (prevStep: number) => number) => void;
}

const ButtonPrevious = ({ currentStep, setCurrentStep }: ButtonPreviousProps) => {
    const previousStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    return (
        <div className="flex pt-10 justify-center items-end flex-col">
            <button
                className="text-gray-300 px-4 py-2"
                onClick={previousStep}
                disabled={currentStep === 0}
            >
                Previous
            </button>
        </div>
    )
}

export default ButtonPrevious;