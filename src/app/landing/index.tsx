import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Pressable } from "react-native";
import { Settings } from "lucide-react-native";
import { useEffect, useState } from "react";
import axios from "axios";

interface Word {
  id: string;
  dutch: string;
  englishTranslations: string[];
}

export default function Index() {
  const [text, setText] = useState("");
  const [currentWord, setCurrentWord] = useState<Word | undefined>(undefined);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const getNewWord = () => {
    let url = "https://language-cards-expo-api.vercel.app/api";

    if (currentWord) {
      url += `?exclude=${currentWord.id}`;
    }

    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setCurrentWord(response.data);
          setIsSuccess(null);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  };

  useEffect(() => {
    getNewWord();
  }, []);

  const onSubmit = () => {
    setIsSuccess(
      currentWord!.englishTranslations.some(
        (e) => e.toLowerCase() === text.toLowerCase()
      )
    );
    setText("");
    getNewWord();
  };

  if (isSuccess === true) {
    return (
      <View className="bg-emerald-700 px-3 pt-12 flex-1 items-center justify-center">
        <Text className="text-emerald-100 font-bold text-5xl">Correct!</Text>
      </View>
    );
  }

  if (isSuccess === false) {
    return (
      <View className="bg-red-700 px-3 pt-12 flex-1 items-center justify-center">
        <Text className="text-red-100 font-bold text-5xl">Incorrect</Text>
        <Text className="text-red-100 text-lg">
          '{currentWord?.dutch}' means '
          {currentWord?.englishTranslations.join(", ")}''.
        </Text>
      </View>
    );
  }

  if (currentWord === undefined) {
    return (
      <View className="bg-black px-3 pt-12 flex-1 items-center justify-center">
        <Text className="text-gray-400 text-5xl font-bold opacity-60">
          Hang on...
        </Text>
        <Text className="text-gray-600 text-sm pt-1 opacity-60">
          Fetching the first word to guess...
        </Text>
      </View>
    );
  }

  return (
    <View className="bg-black px-3 pt-12 flex-1 items-start justify-start">
      <View className="w-full flex flex-col items-end">
        <View className="bg-gray-700 rounded-full p-2">
          <Settings className="h-4 w-4 text-gray-400" />
        </View>
      </View>

      <View className="pb-12 px-3 flex-1 items-center justify-center w-full">
        <View className="flex-1 items-center justify-center w-full">
          <Text className="text-gray-400 text-6xl font-bold">
            {currentWord.dutch}
          </Text>
          <Text className="text-gray-600 text-sm pt-1">
            {currentWord.englishTranslations.length} acceptable answer(s).
          </Text>

          <TextInput
            value={text}
            style={{ color: "#fff" }}
            onChangeText={(text) => {
              console.log(text); // todo: if enter...
              setText(text);
            }}
            underlineColorAndroid="transparent"
            placeholderTextColor="#9ca3af"
            placeholder="Enter your answer"
            autoFocus
            className="font-bold placeholder:font-normal p-2 rounded w-full bg-gray-700 mt-8 text-center"
          />
        </View>

        <Pressable
          className="bg-white w-full rounded-2xl py-4 flex items-center justify-center"
          onPress={onSubmit}
        >
          <Text className="text-black font-bold">Submit</Text>
        </Pressable>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
