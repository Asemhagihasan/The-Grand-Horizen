import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Zocial from "@expo/vector-icons/Zocial";
import { Link, router } from "expo-router";
import { Cabin } from "@/types";
const CabinItem = (cabin: Cabin) => {
  const { name, regularPrice, image, maxCapacity, discount } = cabin;
  return (
    <View className="w-full p-5">
      <View className="w-full border border-primary-800">
        <View className="flex-row">
          <Image
            source={{ uri: image }}
            className="w-1/3 h-full"
            resizeMode="cover"
          />
          <View className="grow">
            <View className="pt-4 px-6 space-y-3">
              <Text className="text-xl text-accent-500 font-semibold">
                {name}
              </Text>
              <View className="items-center flex-row ml-1">
                <Zocial name="guest" size={16} color="#B7C7D7" />
                <Text className="text-base text-primary-200 ml-1">
                  Up for {maxCapacity} guest
                </Text>
              </View>
              {/* <Text className="text-xl text-primary-200 font-medium ml-auto mb-3">
              {discount ? `${}`} /
              <Text className="text-primary-200 text-sm">night</Text>
            </Text> */}
              <Text className="ml-auto">
                {discount ? (
                  <>
                    <Text className="text-primary-200 text-2xl font-medium">
                      ${regularPrice - discount}{" "}
                    </Text>
                    <Text className="text-primary-800 text-base line-through">
                      ${regularPrice}{" "}
                    </Text>
                  </>
                ) : (
                  <Text className="text-primary-200 text-base">
                    {regularPrice}
                  </Text>
                )}
                <Text className="text-primary-200 text-base">/ night</Text>
              </Text>
            </View>
            <View className="border-t border-t-primary-800">
              <TouchableOpacity
                onPress={() => router.push("/")}
                className="border-l border-primary-800 py-4 px-6 inline-block ml-auto "
                activeOpacity={0.6}
              >
                <Text className="text-accent-500 text-sm text-bold">
                  Details & reservation &rarr;
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CabinItem;
