import React, { useState, useEffect, useCallback } from "react";
import { View, TextInput, FlatList, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Chat = ({ currentUserEmail }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const loadMessages = useCallback(() => {
    const unsubscribe = onSnapshot(query(collection(db, "messages"), orderBy("timestamp", "desc")), (snapshot) => {
      const loadedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(loadedMessages);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const unsubscribeFocus = navigation.addListener("focus", loadMessages);
    loadMessages();
    return () => {
      unsubscribeFocus();
    };
  }, [navigation, loadMessages]);
  const sendMessage = (currentUserEmail) => {
    if (message.trim().length > 0) {
      addDoc(collection(db, "messages"), {
        text: message,
        sender: currentUserEmail,
        timestamp: Timestamp.now(),
      });
      setMessage("");
    }
  };
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString();
  };
  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <View style={styles.messageHead}>
        <View style={styles.chatMain}>
          <View style={styles.chatLead}>
            <Text style={styles.timestampText}>{formatTimestamp(item.timestamp)}</Text>
          </View>
          <Text style={styles.senderText}>{item.sender}: </Text>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator style={styles.loadingIndicator} size="large" color="#0000ff" />}
      {!loading && (
        <>
          <FlatList data={messages} keyExtractor={(item) => item.id} renderItem={renderItem} inverted />
          <View style={styles.inputContainer}>
            <TextInput value={message} onChangeText={setMessage} placeholder="Type your message here..." style={styles.input} />
            <TouchableOpacity style={styles.button} onPress={() => sendMessage(currentUserEmail)}>
              <Ionicons name="send" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 25,
    backgroundColor: "#fff",
  },
  chatMain: {
    width: "100%",
    position: "relative",
  },
  chatLead: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
    right: 0,
    top: -8,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  messageContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  senderText: {
    fontWeight: "bold",
    marginRight: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  messageText: {
    fontSize: 16,
  },
  timestampText: {
    color: "#777",

    fontSize: 12,
  },
  messageHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 1,
    borderColor: "#f1f1f1",
    borderRadius: 5,
    padding: 10,
  },
  button: {
    position: "absolute",
    top: 25,
    right: 10,
    borderRadius: 100,
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  currentUserEmail: state.user.email,
});

export default connect(mapStateToProps)(Chat);
