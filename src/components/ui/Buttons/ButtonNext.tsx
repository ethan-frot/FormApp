type ButtonNextProps = {
    currentStep: number;
    setCurrentStep: (currentStep: number) => void;
}

const ButtonNext = ({ currentStep, setCurrentStep }: ButtonNextProps) => {
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    return (
        <div className="flex pt-10 justify-center items-end flex-col">
            <button
                className="bg-purple-400 text-amber-50 px-4 py-2 rounded-sm"
                onClick={nextStep}
            >
                Next
            </button>
        </div>
    )
}

export default ButtonNext;