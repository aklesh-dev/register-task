import { useFormContext } from 'react-hook-form';

interface DropdownProps {
  name: string;
  label: string;
  options: string[];
}

const Dropdown = ({ name, label, options }: DropdownProps) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register(name)}>
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[name] && <p>{errors[name]?.message as string}</p>}
    </div>
  );
};

export default Dropdown;
