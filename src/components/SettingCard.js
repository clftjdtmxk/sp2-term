import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <Text>SettingCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
