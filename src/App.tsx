import {useState} from "react";
import StaticPage from "./components/ui/StaticPage.tsx";
import StepsBar from "./components/ui/StepsBar.tsx";
import AccountType from "./components/steps/AccountType.tsx";
import PersonalInformation from "./components/steps/PersonalInformation.tsx";
import ProfileData from "./components/steps/ProfileData.tsx";
import SentForm from "./components/steps/SentForm.tsx";
import {Clients, ClientAccountType, ClientDto} from "./utils/types/client.ts";


function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<ClientDto>({
    name: "",
    accountType: ClientAccountType.PERSONAL,
    email: "",
    password: "",
    age: "",
    areaOfInterest: "",
    description: ""
  });
  const [clients, setClients] = useState<Clients>([]);


  const steps = [
    <AccountType
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        formData={formData}
        setFormData={setFormData}
    />,
    <PersonalInformation
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        formData={formData}
        setFormData={setFormData}
    />,
    <ProfileData
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        formData={formData}
        setFormData={setFormData}
    />
  ];

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
          <SentForm
              formData={formData}
              setClients={setClients}
          />
      )}
    </div>
  );
}

export default App;
