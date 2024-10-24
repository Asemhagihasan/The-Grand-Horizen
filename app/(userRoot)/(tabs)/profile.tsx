import {
  ActivityIndicator,
  Alert,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import InputField from "@/components/InputField";
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  FieldValues,
  FormProvider,
  Controller,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdatedUserSchema } from "@/types/schema";
import { genders } from "@/constants";
import CustomSelect from "@/components/CustomSelect";
import { useUser } from "@/hooks/useUser";
import { UserMetaData } from "@/types";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { useCountries } from "@/hooks/useCountries";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const { user, isLoadingUser } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const methods = useForm({
    resolver: zodResolver(UpdatedUserSchema),
    defaultValues: user?.user_metadata || {},
  });

  const { fullName, email, nationalId, gender, phoneNumber, address } =
    user?.user_metadata || {};

  const formFields = [
    {
      name: "fullName",
      label: "Full Name",
      component: InputField,
      elementType: "input",
      defaultValue: fullName,
    },
    {
      name: "email",
      label: "Email",
      component: InputField,
      elementType: "input",
      disabled: true,
      defaultValue: email,
    },
    {
      name: "newPassword",
      label: "Reset Password (optional)",
      elementType: "input",
      component: InputField,
      secureTextEntry: true,
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      elementType: "input",
      component: InputField,
      defaultValue: phoneNumber,
      keyboardType: "phone-pad",
      disabled: true,
    },
    {
      name: "address",
      label: "Address",
      elementType: "input",
      component: InputField,
      defaultValue: address,
    },
    {
      name: "nationalId",
      label: "National ID",
      elementType: "input",
      component: InputField,
      defaultValue: nationalId,
    },

    {
      name: "gender",
      label: "Select your gender",
      component: CustomSelect,
      elementType: "select",
      options: genders,
      defaultValue: gender,
    },
  ];

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    updateUser(data as UserMetaData, {
      onSettled: () => {},
    });
  };

  const onError: SubmitErrorHandler<UserMetaData> = (errors, e) => {
    console.log(JSON.stringify(errors));
    Alert.alert("Warning", "some thing went wrong");
  };

  if (isLoadingUser) {
    return (
      <View className="h-full bg-primary-950 items-center justify-center">
        <ActivityIndicator size="large" color="#b7c7d7" />
      </View>
    );
  }

  return (
    <SafeAreaView className="h-full flex-1 bg-primary-950">
      <FormProvider {...methods}>
        <FlatList
          data={formFields}
          keyExtractor={(item) => item.name}
          ListHeaderComponent={() => (
            <View className="p-5 gap-4">
              <Text className="text-accent-500 font-semibold text-xl">
                Update your guest profile{" "}
              </Text>
              <Text className="text-primary-200 text-lg">
                Providing the following information will make your check-in
                process faster and smoother. See you soon!
              </Text>
            </View>
          )}
          renderItem={({ item }) => {
            const Component = item.component;
            return (
              <View className="w-[340px] mx-auto">
                <Controller
                  name={item.name}
                  control={methods.control}
                  key={item.name}
                  render={({
                    field: { onChange, value, onBlur },
                    fieldState: { error },
                  }) => {
                    if (item.elementType === "select") {
                      return (
                        <Component
                          label={item.label}
                          onChange={onChange}
                          value={value}
                          errorMessage={error?.message}
                          disabled={item.disabled}
                          dropdownItems={item.options!}
                        />
                      );
                    }
                    return (
                      <Component
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        errorMessage={error?.message}
                        containerStyle={`rounded-none ${
                          item.disabled && "bg-primary-800"
                        }`}
                        labelStyle="text-primary-200"
                        selectionColor="#B7C7D7"
                        {...item}
                      />
                    );
                  }}
                />
              </View>
            );
          }}
          ListFooterComponent={() => (
            <TouchableOpacity
              onPress={methods.handleSubmit(onSubmit)}
              activeOpacity={0.7}
              className="p-5 bg-accent-500 items-center justify-center my-4 w-[340px] mx-auto"
              disabled={isUpdating}
            >
              <Text className="text-primary-800 text-lg font-semibold">
                {isUpdating ? "Updating..." : "Update profile"}
              </Text>
            </TouchableOpacity>
          )}
        />
      </FormProvider>
    </SafeAreaView>
    //                 label="Select your nationality"
    //                 value={value}
    //                 onChange={onChange}
    //                 dropdownItems={countryOptionsList}
    //                 defaultValue={nationality}
    //                 placeholder="Select nationality"
    //                 errorMessage={error?.message}
    //                 disabled={isLoadingCountries}

    // <SafeAreaView className="h-full flex-1 bg-primary-950">
    //   <ScrollView className="flex-1 p-5 gap-4">
    // <Text className="text-accent-500 font-semibold text-xl">
    //   Update your guest profile{" "}
    // </Text>
    // <Text className="text-primary-200 text-lg">
    //   Providing the following information will make your check-in process
    //   faster and smoother. See you soon!
    // </Text>
    //     <View className="w-full bg-primary-900 p-6 self-center mb-8">
    //       <FormProvider {...methods}>
    //         <Controller
    //           control={methods.control}
    //           name="fullName"
    //           render={({
    //             field: { value, onChange, onBlur },
    //             fieldState: { error },
    //           }) => {
    //             return (
    //               <InputField
    //                 label="Full Name"
    //                 containerStyle="rounded-none"
    //                 labelStyle="text-primary-200"
    //                 selectionColor="#B7C7D7"
    //                 value={value}
    //                 onBlur={onBlur}
    //                 onChangeText={onChange}
    //                 errorMessage={error?.message}
    //                 defaultValue={fullName}
    //               />
    //             );
    //           }}
    //         />
    //         <Controller
    //           control={methods.control}
    //           name="email"
    //           render={({ field: { value } }) => {
    //             return (
    //               <InputField
    //                 label="Email"
    //                 containerStyle={`rounded-none bg-primary-800`}
    //                 labelStyle="text-primary-200"
    //                 value={value}
    //                 disabeld={true}
    //                 selectionColor="#B7C7D7"
    //                 defaultValue={email}
    //               />
    //             );
    //           }}
    //         />
    //         <Controller
    //           control={methods.control}
    //           name="newPassword"
    //           render={({
    //             field: { value, onChange },
    //             fieldState: { error },
    //           }) => {
    //             return (
    //               <InputField
    //                 label="Reset Password"
    //                 containerStyle={`rounded-none`}
    //                 labelStyle="text-primary-200"
    //                 value={value}
    //                 onChangeText={onChange}
    //                 errorMessage={error?.message}
    //                 selectionColor="#B7C7D7"
    //               />
    //             );
    //           }}
    //         />
    //         <Controller
    //           control={methods.control}
    //           name="phoneNumber"
    //           render={({
    //             field: { value, onChange, onBlur },
    //             fieldState: { error },
    //           }) => {
    //             return (
    //               <InputField
    //                 label="Phone Number"
    //                 containerStyle={`rounded-none`}
    //                 labelStyle="text-primary-200"
    //                 onChangeText={onChange}
    //                 value={value}
    //                 onBlur={onBlur}
    //                 disabeld={!!phoneNumber}
    //                 selectionColor="#B7C7D7"
    //                 defaultValue={phoneNumber}
    //                 errorMessage={error?.message}
    //               />
    //             );
    //           }}
    //         />
    //         <Controller
    //           control={methods.control}
    //           name="nationalId"
    //           render={({
    //             field: { value, onChange, onBlur },
    //             fieldState: { error },
    //           }) => {
    //             return (
    //               <InputField
    //                 label="National ID"
    //                 containerStyle={`rounded-none`}
    //                 labelStyle="text-primary-200"
    //                 value={value}
    //                 onChangeText={onChange}
    //                 onBlur={onBlur}
    //                 selectionColor="#B7C7D7"
    //                 errorMessage={error?.message}
    //                 defaultValue={nationalId}
    //               />
    //             );
    //           }}
    //         />
    //         <Controller
    //           control={methods.control}
    //           name="nationality"
    //           render={({
    //             field: { value, onChange },
    //             fieldState: { error },
    //           }) => {
    //             return (
    //               <CustomSelect
    //                 label="Select your nationality"
    //                 value={value}
    //                 onChange={onChange}
    //                 dropdownItems={countryOptionsList}
    //                 defaultValue={nationality}
    //                 placeholder="Select nationality"
    //                 errorMessage={error?.message}
    //                 disabled={isLoadingCountries}
    //               />
    //             );
    //           }}
    //         />
    //         <Controller
    //           control={methods.control}
    //           name="gender"
    //           render={({
    //             field: { value, onChange },
    //             fieldState: { error },
    //           }) => {
    //             return (
    //               <CustomSelect
    //                 label="Select your gender"
    //                 value={value}
    //                 onChange={onChange}
    //                 defaultValue={gender}
    //                 dropdownItems={genders}
    //                 placeholder="Select gender"
    //                 errorMessage={error?.message}
    //               />
    //             );
    //           }}
    //         />

    //         <Controller
    //           control={methods.control}
    //           name="address"
    //           render={({
    //             field: { value, onChange, onBlur },
    //             fieldState: { error },
    //           }) => {
    //             return (
    //               <InputField
    //                 label="Address"
    //                 containerStyle={`rounded-none`}
    //                 labelStyle="text-primary-200"
    //                 value={value}
    //                 onChangeText={onChange}
    //                 onBlur={onBlur}
    //                 selectionColor="#B7C7D7"
    //                 defaultValue={address}
    //                 errorMessage={error?.message}
    //               />
    //             );
    //           }}
    //         />

    // <TouchableOpacity
    //   onPress={methods.handleSubmit(onSubmit)}
    //   activeOpacity={0.7}
    //   className="p-5 bg-accent-500 items-center justify-center mt-6"
    //   disabled={isUpdating}
    // >
    //   <Text className="text-primary-800 text-lg font-semibold">
    //     {isUpdating ? "Updating..." : "Update profile"}
    //   </Text>
    // </TouchableOpacity>
    //       </FormProvider>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default Profile;
