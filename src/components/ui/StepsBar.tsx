type StepsBarProps = {
    currentStep: number;
};

const StepsBar = ({currentStep} : StepsBarProps) => {
    const getStepStyle = (step: number) => {
        if (currentStep === step) {
            return "bg-purple-400 text-amber-50 border-purple-400";
        } else {
            return "bg-white text-gray-300 border-gray-300";
        }
    };

    return (
        <div className="flex pt-5 pb-8 justify-center gap-10 relative">
            <hr className="border-gray-300 border-2 w-full absolute z-0 top-10" />

            {/* Etape 1 */}
            <div className="flex flex-col items-center gap-2 z-1 relative">
                <p className={`py-2 px-4 rounded-full border-2 ${getStepStyle(0)}`}>
                    1
                </p>
                <p className="text-gray-300">Account Type</p>
            </div>

            {/* Etape 2 */}
            <div className="flex flex-col items-center gap-2 z-1 relative">
                <p className={`py-2 px-4 rounded-full border-2 ${getStepStyle(1)}`}>
                    2
                </p>
                <p className="text-gray-300">Personal Information</p>
            </div>

            {/* Etape 3 */}
            <div className="flex flex-col items-center gap-2 z-1 relative">
                <p className={`py-2 px-4 rounded-full border-2 ${getStepStyle(2)}`}>
                    3
                </p>
                <p className="text-gray-300">Profile Data</p>
            </div>
        </div>
    );
};

export default StepsBar;
