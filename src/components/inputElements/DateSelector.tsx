import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
    date: z.string().date(),
})

type DateSelectorProps = z.infer<typeof schema>

interface DateSelectorPropsWithHandlers extends DateSelectorProps {
    onChange?: (date: string | null) => void;
    value?: string;
};

export default function DateSelector({onChange, value}: DateSelectorPropsWithHandlers) {
    const { register, formState: { errors } } = useForm<DateSelectorProps>({
        resolver: zodResolver(schema),
        defaultValues: { date: value || undefined},
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;        
        onChange?.(value);
    }

    return <>
        <div className="">
            <input
                type='date'
                {...register("date", { required: "Date is required!" })}
                value={value || ''}
                onChange={handleChange}
                className={`p-2 rounded-lg focus:outline-none ${errors.date ? 'border-red-500' : ''}`}
            />
            {errors.date && <div className='text-red-500'>{errors.date.message}</div>}
        </div>
    </>
};
