import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import { router } from "expo-router";

const welcome = () => {
  const swiperRef = React.useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="h-full flex-1 items-center bg-primary-950">
      <TouchableOpacity
        onPress={() => {
          router.push("./sign-up");
        }}
        className="flex justify-end p-5 items-end w-full"
      >
        <Text className="text-primary-200 text-lg font-bold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-primary-200 rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-accent-600 rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View
            key={item.id}
            className="flex-1 justify-center items-center text-center p-5"
          >
            <View className="w-full">
              <Image
                source={item.image}
                resizeMode="cover"
                className="w-full h-[300px] mb-4"
              />
            </View>

            <Text className="text-2xl font-semibold text-center text-accent-500">
              {item.title}
            </Text>
            <Text className="text-base text-center py-4 text-primary-100 w-full">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <TouchableOpacity
        onPress={() =>
          isLastSlide
            ? router.push("./sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="bg-accent-600 px-8 py-6 hover:bg-accent-600 transition-all mb-4"
      >
        <Text className="text-primary-800 text-lg font-semibold">
          {isLastSlide ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default welcome;
