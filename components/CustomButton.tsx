import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ButtonProps } from "@/types/index";
const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className = "",
  ...props
}: ButtonProps) => {
  return <TouchableOpacity className=""></TouchableOpacity>;
};

export default CustomButton;
