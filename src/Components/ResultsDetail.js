import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={StyleSheet.container}>
      <Image
        style={styles.ImageStyle}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text style={styles.nameStyle}> {result.name}</Text>
      <Text style={styles.nameStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  ImageStyle: {
    borderRadius: 4,
    width: 250,
    height: 120,
    marginBottom: 5,
    marginLeft: 15,
  },
  nameStyle: {
    fontWeight: "bold",
    marginLeft: 15,
  },
});

export default ResultsDetail;
