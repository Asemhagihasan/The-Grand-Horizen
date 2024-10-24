import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { InputFieldProps } from "@/types";

const InputField = ({
  label,
  labelStyle,
  icon: Icon,
  value,
  onChangeText,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  disabled = false,
  errorMessage,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableOpacity onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-semibold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center bg-primary-700  rounded-full focus:border focus:border-primary-100  relative ${containerStyle}`}
          >
            {Icon && <Icon />}
            <TextInput
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={secureTextEntry}
              placeholderTextColor="#B7C7D7"
              editable={!disabled}
              className={`rounded-full p-4 font-semibold text-base flex-1 text-left text-primary-50 placeholder:text-primary-100  ${inputStyle}`}
              {...props}
            />
          </View>
        </View>
      </TouchableOpacity>
      {errorMessage && (
        <Text className="text-red-500 text-sm">{errorMessage}</Text>
      )}
    </KeyboardAvoidingView>
  );
};

export default InputField;
