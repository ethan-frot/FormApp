import { useState } from "react";
import ButtonAccountType from "../ui/Buttons/ButtonAccountType.tsx";

const AccountTypeSelection = () => {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div>
            <p className="text-gray-300">Choose your account type</p>
            <div className="flex flex-col py-7 gap-5">
                <div className="flex">
                    <ButtonAccountType
                        isSelected={selected === 1}
                        onClick={() => setSelected(1)}
                    />
                    <div className="ml-5">
                        <h3 className="font-bold">Personal Account</h3>
                        <p className="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur radicalising elit.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <ButtonAccountType
                        isSelected={selected === 2}
                        onClick={() => setSelected(2)}
                    />
                    <div className="ml-5">
                        <h3 className="font-bold">Business Account</h3>
                        <p className="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur radicalising elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountTypeSelection;
