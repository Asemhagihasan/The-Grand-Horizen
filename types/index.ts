import { Dispatch, SetStateAction } from "react";

import { TextInputProps, TouchableOpacityProps } from "react-native";
import { GENDER_OPTIONS, UpdatedUserSchema } from "./schema";
export declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

export declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: React.ComponentType<any>;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  selectionColor?: string;
  disabled?: boolean;
  className?: string;
  sourceTextEntry?: boolean;
  errorMessage?: string;
}

export declare interface SignUpProps {
  fullName: string;
  email: string;
  password: string;
}
export declare interface SignInProps {
  email: string;
  password: string;
}

export declare interface CustomSelectProps {
  label: string;
  value: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange: (...event: any[]) => void;
  dropdownItems: DropDownItemsProps[];
  labelStyle?: string;
  valueStyle?: string;
  placeholder?: string;
  containerStyle?: {
    [key: string]: string;
  };
  listItemContainerStyle?: {
    [key: string]: string;
  };
  errorMessage?: string;
}

export declare interface DropDownItemsProps {
  label: string;
  value: string;
}

export type UserMetaData = {
  fullName: string;
  newPassword?: string; // Make it optional
  phoneNumber: string;
  nationalId: string;
  nationality: string;
  address: string;
  gender: (typeof GENDER_OPTIONS)[number]; // Use the gender options type
};

export declare interface FilterValues {
  minPrice: string;
  maxPrice: string;
  activeGuestNumber: string;
}

export declare interface Cabin {
  created_at: string;
  description: string;
  discount: number;
  id: number;
  image: string;
  maxCapacity: number;
  name: string;
  regularPrice: number;
}
