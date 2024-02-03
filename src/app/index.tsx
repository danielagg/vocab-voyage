import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, View, Pressable } from "react-native";

export default function Index() {
  return (
    <View className="bg-black p-6 flex-1 items-start">
      <View className="flex-1 items-start justify-end mt-56">
        <Text className="text-gray-100 text-7xl font-bold uppercase">
          Vocab
        </Text>
        <Text className="text-gray-100 text-5xl font-medium uppercase">
          Voyage
        </Text>
        <View className="pt-2 w-4/5">
          <Text className="text-gray-400">
            Your swift route to mastering Dutch vocabulary - begin now!
          </Text>
        </View>
      </View>
      <View className="flex-1 items-start justify-end w-full">
        <Pressable className="bg-gray-100 w-full rounded-2xl p-4 flex items-center justify-center my-10">
          <Text className="text-black text-lg font-bold">Start</Text>
        </Pressable>
      </View>
    </View>
  );
}
