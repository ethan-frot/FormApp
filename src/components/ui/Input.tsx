type InputProps = {
  type?: "text" | "number" | "email" | "password";
  placeholder?: string;
  name: string;
};
const Input = ({ type, placeholder, name }: InputProps) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="flex flex-col gap-2">
      <label>{capitalizeFirstLetter(name)}</label>
      <input
        type={type || "text"}
        className={`rounded-md text-xl py-2 px-4 text-slate-600 bg-gray-100`}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
