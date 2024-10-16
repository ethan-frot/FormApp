import StaticPage from "./components/ui/StaticPage";
import StepsBar from "./components/ui/StepsBar.tsx";
import AccountType from "./components/steps/AccountType.tsx";
import ButtonNext from "./components/ui/Buttons/ButtonNext.tsx";
import PersonalInformation from "./components/steps/PersonalInformation.tsx";
import ProfileData from "./components/steps/ProfileData.tsx";

function App() {
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="p-6 px-10 flex justify-center items-center flex-col bg-white rounded-md">
        <div>
          <StaticPage />
          <StepsBar />
          <AccountType />
          <PersonalInformation />
          <ProfileData />
          <ButtonNext />
        </div>
      </div>
    </div>
  );
}

export default App;
