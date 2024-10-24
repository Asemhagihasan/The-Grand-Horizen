import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCabins } from "@/hooks/useCabins"; // Assuming this is a React Query hook
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PriceRange from "@/components/PriceRange";
import FilterByGuestNumber from "@/components/FilterByGuestNumber";
import { Cabin } from "@/types";
import CabinItem from "@/components/Cabin";

const Cabins = () => {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [activeGuestNumber, setActiveGuestNumber] = useState<string>("all");
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);
  const { cabins, isLoadingCabins } = useCabins();
  const [filteredCabins, setFilteredCabins] = useState<Cabin[]>([]);
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  // Open the bottom sheet
  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  // Update filtered cabins when filter is applied or when cabins data changes
  useEffect(() => {
    if (cabins && cabins.length > 0) {
      let updatedCabins = cabins;

      if (isFilterApplied) {
        if (minPrice && maxPrice) {
          updatedCabins = updatedCabins.filter((cabin) => {
            if (cabin.discount) {
              return (
                Number(minPrice) <= cabin.regularPrice - cabin.discount &&
                Number(maxPrice) >= cabin.regularPrice - cabin.discount
              );
            } else {
              return (
                cabin.regularPrice >= Number(minPrice) &&
                cabin.regularPrice <= Number(maxPrice)
              );
            }
          });
        }

        if (activeGuestNumber === "small") {
          updatedCabins = updatedCabins.filter(
            (cabin) => cabin.maxCapacity <= 3
          );
        } else if (activeGuestNumber === "medium") {
          updatedCabins = updatedCabins.filter(
            (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
          );
        } else if (activeGuestNumber === "large") {
          updatedCabins = updatedCabins.filter(
            (cabin) => cabin.maxCapacity >= 8
          );
        }
      }
      setFilteredCabins(updatedCabins);
    }
  }, [isFilterApplied, cabins, minPrice, maxPrice, activeGuestNumber]);

  if (isLoadingCabins) {
    return (
      <View className="flex-1 bg-primary-950 items-center justify-center">
        <ActivityIndicator color="#B7C7D7" size="large" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="bg-primary-950 flex-1">
        <FlatList
          data={filteredCabins}
          renderItem={({ item }) => <CabinItem {...item} key={item.id} />}
          ListHeaderComponent={() => (
            <View className="flex-row justify-between items-center w-full p-5">
              <Text className="text-accent-500 text-lg font-semibold">
                Our Luxury Cabins
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                className="p-3 items-center justify-center border border-primary-800 shadow-sm shadow-primary-200"
                onPress={openBottomSheet}
              >
                <Text className="text-sm font-bold text-primary-200">
                  Filter / Sort
                </Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={() => (
            <View className="mt-48">
              <Text className="text-white text-center">
                No results. Adjust your filters.
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          initialNumToRender={10} // Improve performance for long lists
          windowSize={10} // Preload more items offscreen
          removeClippedSubviews={true} // Optimize memory usage
        />
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={["85%"]}
          index={-1}
          backgroundStyle={{ backgroundColor: "#1B2631" }}
          enablePanDownToClose
          handleIndicatorStyle={{ backgroundColor: "#B7C7D7" }}
        >
          <BottomSheetView style={{ flex: 1, padding: 20 }}>
            <View className="space-y-4 h-full w-full">
              <View className="w-full flex-row items-center justify-center gap-2 mb-6">
                <FontAwesome name="filter" size={24} color="#C69963" />
                <Text className="text-accent-500 text-2xl font-semibold">
                  Filter
                </Text>
              </View>

              <PriceRange
                minValue="250"
                maxValue="1000"
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                minPrice={minPrice}
                maxPrice={maxPrice}
              />

              <FilterByGuestNumber
                activeGuestNumber={activeGuestNumber}
                setActiveGuestNumber={setActiveGuestNumber}
              />

              <TouchableOpacity
                activeOpacity={0.6}
                className="bg-accent-600 px-8 py-5 items-center justify-center"
                onPress={() => {
                  Keyboard.dismiss();
                  setIsFilterApplied(true);
                  closeBottomSheet();
                }}
              >
                <Text className="text-primary-800 text-xl font-semibold">
                  Apply the filter
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                className="bg-primary-800 px-8 py-5 items-center justify-center"
                onPress={() => {
                  Keyboard.dismiss();
                  setMinPrice("");
                  setMaxPrice("");
                  setActiveGuestNumber("all");
                  setFilteredCabins(cabins!);
                  setIsFilterApplied(false);
                  closeBottomSheet();
                }}
              >
                <Text className="text-primary-200 text-xl font-semibold">
                  Reset Filters
                </Text>
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Cabins;
