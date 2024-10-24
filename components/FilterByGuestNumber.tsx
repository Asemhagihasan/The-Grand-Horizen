import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const FilterByGuestNumber = ({
  activeGuestNumber,
  setActiveGuestNumber,
}: {
  activeGuestNumber: string;
  setActiveGuestNumber: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleFilter = (filter: string) => {
    setActiveGuestNumber(filter);
  };
  return (
    <>
      <Text className="text-lg font-semibold text-primary-200 mt-6">
        Guests
      </Text>
      <View className="w-full flex-row flex-wrap gap-3 mt-4 items-center justify-center mx-auto mb-2">
        <Button
          filter="all"
          handleFilter={handleFilter}
          activeFilter={activeGuestNumber}
        >
          <Text className="text-base text-primary-100">All cabins</Text>
        </Button>
        <Button
          filter="small"
          handleFilter={handleFilter}
          activeFilter={activeGuestNumber}
        >
          <Text className="text-base text-primary-100">2&mdash;3 guests</Text>
        </Button>
        <Button
          filter="medium"
          handleFilter={handleFilter}
          activeFilter={activeGuestNumber}
        >
          <Text className="text-base text-primary-100">4&mdash;7 guests</Text>
        </Button>
        <Button
          filter="large"
          handleFilter={handleFilter}
          activeFilter={activeGuestNumber}
        >
          <Text className="text-base text-primary-100">8&mdash;12 guests</Text>
        </Button>
      </View>
    </>
  );
};

const Button = ({
  filter,
  handleFilter,
  children,
  activeFilter,
}: {
  filter: string;
  handleFilter: (filter: string) => void;
  children: React.ReactNode;
  activeFilter: string;
}) => {
  return (
    <TouchableOpacity
      className={`py-4 px-5 items-center justify-center border border-primary-200 grow ${
        filter === activeFilter ? "bg-primary-800 text-primary-50" : ""
      }`}
      activeOpacity={0.6}
      onPress={() => handleFilter(filter)}
    >
      <Text className="text-base text-primary-100">{children}</Text>
    </TouchableOpacity>
  );
};

export default FilterByGuestNumber;
