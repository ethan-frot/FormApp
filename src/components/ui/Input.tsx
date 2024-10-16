import React from "react";

type InputProps = {
    type?: "text" | "number" | "email" | "password";
    placeholder?: string;
    name: string;
    label: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, placeholder, name, label, value, onChange }: InputProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name}>{label}</label>
            <input
                type={type || "text"}
                className={`rounded-md text-xl py-2 px-4 text-slate-600 bg-gray-100`}
                placeholder={placeholder}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
};

export default Input;
