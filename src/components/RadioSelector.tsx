import { useFormContext } from 'react-hook-form';

interface RadioSelectorProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

const RadioSelector = ({ name, label, options }: RadioSelectorProps) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <label key={option.value}>
          <input type="radio" value={option.value} {...register(name)} />
          {option.label}
        </label>
      ))}
      {errors[name] && <p>{errors[name]?.message as string}</p>}
    </div>
  );
};

export default RadioSelector;
