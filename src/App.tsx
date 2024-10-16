import StaticPage from "./components/ui/StaticPage";
import StepsBar from "./components/ui/StepsBar.tsx";
import AccountType from "./components/steps/AccountType.tsx";
import PersonalInformation from "./components/steps/PersonalInformation.tsx";
import ProfileData from "./components/steps/ProfileData.tsx";
import ButtonPrevious from "./components/ui/Buttons/ButtonPrevious.tsx";
import ButtonNext from "./components/ui/Buttons/ButtonNext.tsx";

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
          <div className="flex justify-end gap-2">
            <ButtonPrevious />
            <ButtonNext />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
