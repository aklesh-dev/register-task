import { z } from 'zod';

export const registrationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(10, "Phone number should be at least 10 digits"),
  birthDate: z.string().min(1, "Birth date is required"),
  gender: z.enum(["male", "female"], { required_error: "Gender is required" }),
  country: z.string().min(1, "Country is required"),
  district: z.string().min(1, "District is required"),
  municipality: z.string().min(1, "Municipality is required"),
  city: z.string().min(1, "City is required"),
  ward: z.string().min(1, "Ward is required"),
  profilePicture: z.instanceof(File),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
