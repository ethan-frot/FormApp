const ButtonAccountType = ({ isSelected, onClick }: { isSelected: boolean, onClick: () => void }) => {
    return (
        <button
            className={`w-1/6 p-4 rounded-md border-2 border-purple-400 
                ${isSelected ? 'bg-purple-400' : ''} group`}
            onClick={onClick}
        >
            <img
                src="../../../../public/account-type.svg"
                alt="account-type"
                className={` ${isSelected ? 'filter brightness-0 invert' : ''}`}
            />
        </button>
    );
};

export default ButtonAccountType;
