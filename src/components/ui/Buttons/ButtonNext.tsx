type ButtonNextProps = {
    currentStep: number;
    setCurrentStep: (currentStep: (prevStep: number) => number) => void;
}

const ButtonNext = ({ currentStep, setCurrentStep }: ButtonNextProps) => {
    const nextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
    };

    return (
        <div className="flex pt-10 justify-center items-end flex-col">
            <button
                className="bg-purple-400 text-amber-50 px-4 py-2 rounded-sm"
                onClick={nextStep}
                disabled={currentStep === 3}
            >
                Next
            </button>
        </div>
    )
}

export default ButtonNext;