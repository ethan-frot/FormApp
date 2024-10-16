import { useState } from "react";
import StaticPage from "./components/ui/StaticPage.tsx";
import StepsBar from "./components/ui/StepsBar.tsx";
import AccountType from "./components/steps/AccountType.tsx";
import PersonalInformation from "./components/steps/PersonalInformation.tsx";
import ProfileData from "./components/steps/ProfileData.tsx";
import SendForm from "./components/steps/SendForm.tsx";
function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
      <AccountType
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />,
    <PersonalInformation
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
    />,
    <ProfileData
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
    />];

  return (
    <div className="flex justify-center items-center pt-10">
      {currentStep < 3 ? (
          <div className="p-6 px-10 flex justify-center items-center flex-col bg-white rounded-md">
            <div>
              <StaticPage />
              <StepsBar
                  currentStep={currentStep}
              />
              {steps[currentStep]}
            </div>
          </div>
      ) : (
        <SendForm />
      )}
    </div>
  );
}

export default App;
