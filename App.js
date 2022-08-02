import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, StatusBar, View } from "react-native";
import { Post } from "./components/Post";

export default function App() {
  const [items, setItems] = React.useState();

  React.useEffect(() => {
    axios
      .get("https://62e939e201787ec71213f4bc.mockapi.io/artcles/articles")
      .then(({ data }) => setItems(data))
      .catch((error) => {
        console.log(error);
        Alert.alert("Error", "Error getting articles");
      });
  }, []);


  return (
    <View>
      {items && items.map((item) => (
        <Post
          key={item.id}
          title={item.title}
          createdAt={item.createdAt}
          imageUrl={item.imageUrl}
        />
      ))}
      <StatusBar theme="auto" />
    </View>
  );
}
