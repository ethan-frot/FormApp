import Input from "../ui/Input.tsx";

const PersonalInformation = () => {
    return (
        <div className="flex flex-col gap-8">
            <Input
                type='text'
                placeholder='Jhon Doe'
                name='name'
            />
            <Input
                type='email'
                placeholder='johndoe@gmail.com'
                name='email'
            />
            <Input
                type='text'
                placeholder='********'
                name='password'
            />
        </div>
    );
};

export default PersonalInformation;
