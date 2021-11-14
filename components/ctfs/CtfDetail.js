import * as React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const ctf = {
  "organizers": [
    {
      "id": 163107,
      "name": "Security Research Summit (SRS)"
    }
  ],
  "onsite": false,
  "finish": "2021-11-15T16:00:00+00:00",
  "description": "The CTF competition hosted by Intent. The Security Research Summit.\r\nFor researchers. By researchers.",
  "weight": 0.00,
  "title": "Intent CTF 2021",
  "url": "https://ctf.intentsummit.org/",
  "is_votable_now": false,
  "restrictions": "Open",
  "format": "Jeopardy",
  "start": "2021-11-13T16:00:00+00:00",
  "participants": 37,
  "ctftime_url": "https://ctftime.org/event/1454/",
  "location": "",
  "live_feed": "https://ctftime.org/live/1454/",
  "public_votable": true,
  "duration": {"hours": 0, "days": 2},
  "logo": "https://ctftime.org//media/events/intent_i.png",
  "format_id": 1,
  "id": 1454,
  "ctf_id": 672
}

const CtfDetail = ({ route, navigation }) => {
  const { id } = route.params;
  navigation.setOptions({ headerTitle: ctf.title });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{ctf.title}</Text>
          <Text style={styles.date}>{new Date(ctf.start).toUTCString()}</Text>
          <Text style={styles.date}>{new Date(ctf.finish).toUTCString()}</Text>
          <Text style={styles.date}>{id}</Text>
        </View>
        <Image style={styles.logo} source={{ uri: ctf.logo }} />
      </View>
      <View style={styles.body}>
          <Text>{ctf.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '700',
  },
  date: {
    color: 'gray',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  body: {
    padding: 4,
  },
});

export default CtfDetail;
