import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Pressable } from "react-native";
import { Settings } from "lucide-react-native";
import { useState } from "react";

export default function Index() {
  const [text, setText] = useState("");
  const [isSuccess, setISuccess] = useState<boolean | null>(null);

  const onSubmit = () => {
    setISuccess(true);

    setTimeout(() => {
      setISuccess(null);
    }, 1500);
  };

  if (isSuccess === true) {
    return (
      <View className="bg-emerald-500 px-3 pt-12 flex-1 items-center justify-center">
        <Text className="text-emerald-100 font-bold text-5xl">Correct!</Text>
      </View>
    );
  }

  if (isSuccess === false) {
    return (
      <View className="bg-red-500 px-3 pt-12 flex-1 items-center justify-center">
        <Text className="text-red-100 font-bold text-5xl">Incorrect</Text>
        <Text className="text-red-100 text-lg">'duur' means whatever.</Text>
      </View>
    );
  }

  return (
    <View className="bg-gray-100 px-3 pt-12 flex-1 items-start justify-start">
      <View className="w-full flex flex-col items-end">
        <View className="bg-gray-200 rounded-full p-2">
          <Settings className="h-4 w-4 text-gray-400" />
        </View>
      </View>

      <View className="pb-12 px-3 flex-1 items-center justify-center w-full">
        <View className="flex-1 items-center justify-center w-full">
          <Text className="text-gray-600 text-6xl font-bold">duur</Text>
          <Text className="text-gray-400 text-sm pt-1">
            This word has never been answered.
          </Text>
          <TextInput
            value={text}
            style={{ color: "#1f2937" }}
            onChangeText={setText}
            underlineColorAndroid="transparent"
            placeholderTextColor="#9ca3af"
            placeholder="Enter your answer"
            autoFocus
            className="font-bold placeholder:font-normal p-2 rounded w-full bg-gray-300 mt-8 text-center"
          />
        </View>

        <Pressable
          className="bg-black w-full rounded-2xl py-4 flex items-center justify-center"
          onPress={onSubmit}
        >
          <Text className="text-gray-100 font-bold">Submit</Text>
        </Pressable>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}
