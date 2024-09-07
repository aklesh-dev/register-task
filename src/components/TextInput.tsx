import { useFormContext } from "react-hook-form";

interface TextInputProps {
    name: string;
    label: string;
};
const TextInput = ({ name, label }: TextInputProps) => {
    const { register, formState: { errors } } = useFormContext();
    
    return <>
        <div className="">
            <label htmlFor="name">{label}</label>
            <input id="name" {...register(name)} />
            {errors[name] && <p>{errors[name]?.message as string}</p>}
        </div>
    </>
};
export default TextInput;

