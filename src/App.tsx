function App() {
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="p-6 px-10 flex justify-center items-center flex-col bg-white rounded-md">
        <div>
          <div className="w-full text-center mb-7">
            <h1 className="font-bold text-3xl mb-5">Registration Form</h1>
            <p className="text-gray-300">
              Please fill out this form with the required information
            </p>
          </div>
            <div className="flex pt-5 pb-8 justify-center gap-10 relative">
                <hr className="border-gray-300 border-2 w-full absolute z-0 top-10" />
                <div className="flex flex-col items-center gap-2 z-1 relative">
                    <p className="py-2 px-4 rounded-full bg-purple-400 text-amber-50 border-purple-400 border-2">1</p>
                    <p className="text-gray-300">Account Type</p>
                </div>
                <div className="flex flex-col items-center gap-2 z-1 relative">
                    <p className="py-2 px-4 rounded-full bg-white text-gray-300 border-gray-300 border-2">2</p>
                    <p className="text-gray-300">Personal Information</p>
                </div>
                <div className="flex flex-col items-center gap-2 z-1 relative   ">
                    <p className="py-2 px-4 rounded-full bg-white text-gray-300 border-gray-300 border-2">3</p>
                    <p className="text-gray-300">Profile Data</p>
                </div>
            </div>
            <div>
                <p className="text-gray-300">Chose your account type</p>
                <div className="flex flex-col py-7 gap-5">
                    <div className="flex">
                        <button className="w-1/6 p-4 rounded-md border-2 border-purple-400">
                  <img src="../public/account-type.svg" alt="account-type" />
                </button>
                <div className="ml-5">
                  <h3 className="font-bold">Personal Account</h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex">
                <button className="w-1/6 p-4 rounded-md border-2 border-purple-400 bg-purple-400">
                  <img
                    src="../public/account-type-hover.svg"
                    alt="account-type"
                  />
                </button>
                <div className="ml-5">
                  <h3 className="font-bold">Business Account</h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
            <div className="flex pt-10 justify-center items-end flex-col">
                <button className="bg-purple-400 text-amber-50 px-4 py-2 rounded-sm">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
