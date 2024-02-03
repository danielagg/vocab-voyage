import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, View, Pressable } from "react-native";

export default function App() {
  const [text, onChangeText] = useState("");

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
        <Pressable
          className="bg-gray-100 w-full rounded-2xl p-4 flex items-center justify-center my-10"
          disabled={text === ""}
        >
          <Text className="text-black text-lg font-bold">Start</Text>
        </Pressable>
      </View>
    </View>
    // <View className="bg-slate-950 px-6 py-12 min-h-screen flex-1 items-center justify-between">
    //   <TopBar />

    //   <View className="flex-1 items-center w-full justify-center">
    //     <View className="flex-1 items-center w-full justify-center">
    //       <Text className="text-slate-300 text-5xl font-bold">duur</Text>
    //       <Text className="text-slate-500 text-xs pt-1">
    //         This word has never been answered.
    //       </Text>
    //       <TextInput
    //         value={text}
    //         style={{ color: "#cbd5e1" }}
    //         onChangeText={onChangeText}
    //         underlineColorAndroid="transparent"
    //         placeholderTextColor="#64748b"
    //         placeholder="Enter your answer"
    //         // autoFocus
    //         className="font-bold placeholder:font-normal border border-slate-600 p-2 rounded w-full bg-slate-800 mt-12"
    //       />
    //     </View>
    //   </View>

    // <Pressable
    //   className="bg-emerald-400 disabled:bg-gray-600 w-full rounded-full p-4 flex items-center justify-center mt-4"
    //   disabled={text === ""}
    // >
    //   <Text className="text-emerald-800 font-bold">Submit</Text>
    // </Pressable>

    //   <StatusBar style="auto" />
    // </View>
  );
}
