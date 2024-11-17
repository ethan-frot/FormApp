import {useState} from "react";
import StaticPage from "./components/ui/StaticPage.tsx";
import StepsBar from "./components/ui/StepsBar.tsx";
import PersonalInformation from "./components/steps/PersonalInformation.tsx";
import ContactInformation from "./components/steps/ContactInformation.tsx";
import SentForm from "./components/steps/SentForm.tsx";
import {Clients, ClientDto, ClientStatus} from "./utils/types/client.ts";


function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<ClientDto>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    notes: "",
    createdAt: new Date(),
    status: ClientStatus.NOT_CONTACTED,
  });
  const [clients, setClients] = useState<Clients>([]);


  const steps = [
    <PersonalInformation
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        formData={formData}
        setFormData={setFormData}
    />,
    <ContactInformation
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        formData={formData}
        setFormData={setFormData}
    />
  ];

  return (
    <div className="flex justify-center items-center pt-10">
      {currentStep < 2 ? (
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
