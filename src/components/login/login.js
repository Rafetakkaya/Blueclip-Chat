import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, BackHandler, Alert, StatusBar, TextInput } from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import blueClip_logo from "../../../assets/img/blueclipglobal_logo.jpeg";
import { connect } from "react-redux";
import { setEmail } from "../../../action";

const Login = ({ setEmail, navigation }) => {
  const [mail, setMail] = useState("");
  const isValidEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        "Do you want to exit the application?",
        "Are you sure?",
        [
          {
            text: "No",
            onPress: () => null,
            style: "cancel",
          },
          { text: "Yes", onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false }
      );
      return true;
    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, []);
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          "Do you want to exit the application?",
          "Are you sure?",
          [
            {
              text: "No",
              onPress: () => null,
              style: "cancel",
            },
            { text: "Yes", onPress: () => BackHandler.exitApp() },
          ],
          { cancelable: false }
        );
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );
  const handleLoginPress = () => {
    if (isValidEmail(mail)) {
      setEmail(mail);
      navigation.navigate("Home");
    } else {
      Alert.alert("Invalid email address");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#496bd1" />
      <View style={styles.login}>
        <Image style={styles.ImageBlueClip} source={blueClip_logo} />
        <Text style={styles.loginText}>Login</Text>
        <TextInput value={mail} onChangeText={setMail} style={styles.input} placeholder="Email" />
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
    fontFamily: "Inter-Black",
    textAlign: "center",
    color: "#fff",
    marginRight: 10,
    fontWeight: "bold",
  },
  button: {
    display: "flex",
    backgroundColor: "#2854d6",
    width: "83%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
  },
  ImageBlueClip: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 5,
  },
  input: {
    width: "83%",
    height: 47,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2854d6",
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    fontFamily: "Inter-Black",
    color: "#2854d6",
    textAlign: "center",
  },
});

export default connect(null, { setEmail })(Login);
