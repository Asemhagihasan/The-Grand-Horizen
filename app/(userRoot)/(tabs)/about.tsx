import {
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const About = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary-950">
      <ScrollView className="h-full p-5 space-y-4">
        <View className="space-y-4 mb-4">
          <Text className="text-2xl font-medium text-accent-400 mb-2">
            Welcome to The Grand Horizen
          </Text>
          <Text className="text-base text-primary-100 font-semibold">
            Where nature's beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it's not just about the luxury cabins.
            It's about the experience of reconnecting with nature and enjoying
            simple pleasures with family.
          </Text>
          <Text className="text-base text-primary-100 font-semibold">
            Our 8 luxury cabins provide a cozy base, but the real freedom and
            peace you'll find in the surrounding mountains. Wander through lush
            forests, breathe in the fresh air, and watch the stars twinkle above
            from the warmth of a campfire or your hot tub.
          </Text>
        </View>
        <View className="space-y-4 mb-4">
          <Text className="text-2xl font-medium text-accent-400 mb-2">
            Managed by our family since 1962
          </Text>
          <Text className="text-base text-primary-100 font-semibold">
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </Text>
          <Text className="text-base text-primary-100 font-semibold">
            Over the years, we've maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you're not just a
            guest; you're part of our extended family. So join us at The Wild
            Oasis soon, where tradition meets tranquility, and every visit is
            like coming home.
          </Text>
        </View>

        <TouchableOpacity
          className="bg-accent-500 px-8 py-6 transition-all mb-8 items-center justify-center"
          activeOpacity={0.7}
          onPress={() => router.push("/cabins")}
        >
          <Text className="text-primary-800 text-lg font-semibold">
            Explor our luxery cabins
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
