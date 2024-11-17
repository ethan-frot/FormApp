type ButtonNextProps = {
    type: 'button' | 'submit';
    currentStep: number;
    setCurrentStep: (currentStep: (prevStep: number) => number) => void;
}

const ButtonNext = ({ currentStep, setCurrentStep, type }: ButtonNextProps) => {
    const handleNextClick = () => {
        if (type === 'button') {
            setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
        }
    };

    return (
        <div className="flex pt-10 justify-center items-end flex-col">
            <button
                className="bg-purple-400 text-amber-50 px-4 py-2 rounded-sm"
                onClick={type === 'button' ? handleNextClick : undefined}
                disabled={currentStep === 3}
                type={type}
            >
                Next
            </button>
        </div>
    );
};

export default ButtonNext;