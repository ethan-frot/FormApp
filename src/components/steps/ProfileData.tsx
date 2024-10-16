import Input from "../ui/Input.tsx";

const ProfileData = () => {
    return (
        <div className="flex flex-col gap-8">
            <Input
                type='number'
                placeholder='20'
                name='age'
                label='Age'
            />
            <Input
                type='text'
                placeholder='Frontend'
                name='areaOfInterest'
                label='Area of interest'
            />
            <Input
                type='text'
                placeholder='Lorem ipsum'
                name='bioDescription'
                label='Bio / Description'
            />
        </div>
    );
};

export default ProfileData;
