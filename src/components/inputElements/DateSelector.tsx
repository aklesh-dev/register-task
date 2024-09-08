
import { useFormContext } from 'react-hook-form';

interface DateSelectorProps {
    name: string;
    label: string;
}

export default function DateSelector({ name, label }: DateSelectorProps) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="date" id={name} {...register(name)} />
            {errors[name] && <p>{errors[name]?.message as string}</p>}
        </div>
    )
};
