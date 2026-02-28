import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { useSocialAuth } from "@/hooks/useSocialAuth";

const Index = () => {
  const { handleSocialAuth, isLoading } = useSocialAuth();
  return (
    <View className="flex-1 justify-center items-center w-full">
      <TouchableOpacity
        onPress={() => handleSocialAuth("oauth_google")}
        disabled={isLoading}
        className="bg-white border border-blue-500 px-6 py-2 rounded-full"
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Text className="text-black font-medium">Continue with Google</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Index;
