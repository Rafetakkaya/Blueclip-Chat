import { View, Image, StyleSheet, SafeAreaView, BackHandler, StatusBar } from "react-native";
import React, { useEffect } from "react";
import blueClip_logo from "../../../assets/img/blueclipglobal_logo.jpeg";

export default function InitialScreen({ navigation }) {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      BackHandler.exitApp();
      return true;
    });
    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#2854d6" />
      <View style={styles.container}>
        <Image style={styles.image} source={blueClip_logo} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});
