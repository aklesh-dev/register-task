import { useFormContext } from 'react-hook-form';

interface ImageInputProps {
  name: string;
  label: string;
}

const ImageInput = ({ name, label }: ImageInputProps) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="file" accept="image/*" id={name} {...register(name)} />
      {errors[name] && <p>{errors[name]?.message as string}</p>}
    </div>
  );
};
export default ImageInput;