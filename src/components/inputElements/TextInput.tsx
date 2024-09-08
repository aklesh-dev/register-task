import { useFormContext } from "react-hook-form";

interface TextInputProps {
    name: string;
    label: string;

};

export default function TextInput({ name, label }: TextInputProps) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="text" {...register(name)} />
            {errors[name] && <div>{errors[name]?.message as string}</div>}
        </div>
    )
}
