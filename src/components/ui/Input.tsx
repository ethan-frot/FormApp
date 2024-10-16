type InputProps = {
  type?: "text" | "number" | "email" | "password";
  placeholder?: string;
  name: string;
  label: string;
};
const Input = ({ type, placeholder, name, label }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        type={type || "text"}
        className={`rounded-md text-xl py-2 px-4 text-slate-600 bg-gray-100`}
        placeholder={placeholder}
        name={name}
        required
      />
    </div>
  );
};

export default Input;
