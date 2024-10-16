const ButtonAccountType = ({accountType, isSelected, onClick }: {accountType: string, isSelected: boolean, onClick: () => void }) => {
    return (
        <>
            <button
                className={`flex items-center justify-end`}
                onClick={onClick}
            >
                <div className={`p-4 rounded-md border-2 border-purple-400 ${isSelected ? 'bg-purple-400' : ''} group`}>
                    <img
                        src="/account-type.svg"
                        alt="account-type"
                        className={` ${isSelected ? 'filter brightness-0 invert' : ''}`}
                    />
                </div>
                <div className="ml-5 flex flex-col items-start">
                    <h3 className="font-bold">{accountType} Account</h3>
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit amet consectetur radicalising elit.
                    </p>
                </div>
            </button>
        </>
    )
        ;
};

export default ButtonAccountType;
