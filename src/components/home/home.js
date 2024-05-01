import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image } from "react-native";
import React from "react";
import blueClip_logo from "../../../assets/img/blueclipglobal_logo.jpeg";
import Chat from "./chat";
export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#496bd1" />
      <View style={[styles.home]}>
        <View style={styles.homeHead}>
          <Image style={styles.homeImg} source={blueClip_logo} />
          <Text style={styles.homeHeadText}>BlueClip</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.subTitle}>Technical team</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Chat />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  home: {
    height: 80,
    backgroundColor: "#2854d6",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  homeHead: {
    flex: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  main: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
  },
  subTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  homeImg: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#fff",
  },
  homeHeadText: {
    fontSize: 15,
    fontFamily: "Inter-Black",
    color: "#fff",
    marginLeft: 5,
    fontWeight: "bold",
  },
});
