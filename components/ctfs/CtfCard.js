import * as React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const CtfCard = ({ logo, title, start, finish, navigation, id }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('CtfDetail', { id: id })}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{new Date(start).toDateString()} ~ {new Date(finish).toDateString()}</Text>
      </View>
      {logo !== ''
        ? <Image style={styles.logo} source={{uri: logo}} />
        : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    color: 'gray',
  },
  logo: {
    width: 60,
    height: 60,
  },
});

export default CtfCard;
