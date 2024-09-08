import { useForm } from 'react-hook-form';

interface DateSelectorProps {
    name: string;
};

export default function DateSelector({ name }: DateSelectorProps) {
    const { register, formState: { errors } } = useForm();

    return <>
        <input
            type='date'
            {...register(name)}
            id={name}
            className={`p-2 rounded-lg focus:outline-none ${errors[name] ? 'border-red-500' : ''}`}
        />
        {errors[name] && (
            <>
                {errors[name]?.message && <span className='text-red-500'>{errors[name]?.message as string}</span>}

            </>
        )}
    </>
};
