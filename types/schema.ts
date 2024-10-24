import { date, z } from "zod";

const FIELD_REQUIRED_STR = "This field is required";
export const GENDER_OPTIONS = ["male", "female", "other"] as const;

export const UpdatedUserSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must be less than 50 characters"),
  newPassword: z
    .string()
    .min(8, "Password must be at least 6 characters")
    .max(16, "Password must be less than 50 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .optional(),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number must be less than 15 characters"),
  // .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  nationalId: z
    .string()
    .length(11, "National ID must be exactly 11 digits")
    .regex(/^[1-9][0-9]{10}$/, "Invalid National ID format"),
  nationality: z.string(),
  address: z.string().max(100, "Address must be less than 100 characters"),
  gender: z.enum(GENDER_OPTIONS, {
    required_error: FIELD_REQUIRED_STR,
    invalid_type_error: `Invalid gender, must be one of the followings: ${GENDER_OPTIONS.join(
      ", "
    )}`,
  }),

  // dateOfBirth: z
  //   .string()
  //   .refine((val) => new Date(val) < new Date(), "Invalid date of birth"),
});
