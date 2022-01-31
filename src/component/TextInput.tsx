import React, { ChangeEvent } from "react";

interface TextInputProps<
    T extends React.InputHTMLAttributes<HTMLInputElement>["value"]
> extends React.InputHTMLAttributes<HTMLInputElement> {
    value: T;
    setValue?: (e: React.SetStateAction<T>) => void;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    className?: string;
}

const TextInput = <
    T extends React.InputHTMLAttributes<HTMLInputElement>["value"]
>({
    id,
    placeholder,
    name,
    type = "text",
    value,
    onChange,
    setValue,
    className,
    leadingIcon,
    trailingIcon,
    ...props
}: TextInputProps<T>) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange !== undefined) onChange(event);
        if (setValue !== undefined) setValue(event.target.value as T);
    };

    const finalClassName = `mt-1 relative rounded-md shadow-sm  ${className}`;
    return (
        <div className={finalClassName}>
            {leadingIcon && (
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {leadingIcon}
                </div>
            )}
            <input
                // {...(id && { id: id })}
                // {...(type ? { type: type } : { type: "text" })}
                // {...(placeholder && { placeholder: placeholder })}
                // {...(name && { name: name })}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-2 sm:text-sm border-gray-300 rounded-md"
                value={value}
                onChange={handleInputChange}
                {...props}
            />
            {trailingIcon && (
                <div className="absolute inset-y-0 right-0 flex items-center">
                    {trailingIcon}
                </div>
            )}
        </div>
    );
};

export default TextInput;
