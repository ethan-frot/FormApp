import Input from "../ui/Input.tsx";

const PersonalInformation = () => {
    return (
        <div className="flex flex-col gap-8">
            <Input
                type='text'
                placeholder='Jhon Doe'
                name='name'
                label='Name'
            />
            <Input
                type='email'
                placeholder='johndoe@gmail.com'
                name='email'
                label='Email'
            />
            <Input
                type='text'
                placeholder='********'
                name='password'
                label='Password'
            />
        </div>
    );
};

export default PersonalInformation;
