import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const PriceRange = ({
  minValue,
  maxValue,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}: {
  minValue: string;
  maxValue: string;
  minPrice: string;
  maxPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const heighstPriceForSeting = Number(maxValue);

  const handleMinPriceChange = (text: string) => {
    // Allow only numbers
    if (/^\d*$/.test(text)) {
      if (Number(text) <= heighstPriceForSeting) setMinPrice(text);
    }
  };

  const handleMaxPriceChange = (text: string) => {
    // Allow only numbers
    if (/^\d*$/.test(text)) {
      if (Number(text) <= heighstPriceForSeting) setMaxPrice(text);
    }
  };

  return (
    <View>
      <Text className="text-lg font-semibold text-primary-200 mb-3">
        Price Range
      </Text>
      <Text className="text-primary-50 mb-4">
        Our cabins are priced between ${minValue} and ${maxValue}. Please select
        your desired price range.
      </Text>
      <View className="flex-row items-center w-full gap-2">
        <View className="border p-4 border-primary-50 items-center justify-center grow bg-primary-800">
          <TextInput
            keyboardType="numeric"
            placeholder="Min Price"
            className="text-primary-100 w-full"
            value={minPrice}
            onChangeText={handleMinPriceChange}
            selectionColor="#D4DEE7"
            placeholderTextColor="#B7C7D7"
          />
        </View>
        <View className="w-4 h-[3px] bg-primary-200 rounded-full" />
        <View className="border p-4 border-primary-200 items-center justify-center grow bg-primary-800">
          <TextInput
            keyboardType="numeric"
            placeholder="Max Price"
            className="text-primary-100 w-full"
            value={maxPrice}
            onChangeText={handleMaxPriceChange}
            selectionColor="#D4DEE7"
            placeholderTextColor="#B7C7D7"
          />
        </View>
      </View>
    </View>
  );
};

export default PriceRange;
