import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { mockEvents } from './src/utils/mockData';
import { processEvent } from './src/utils/eventProcessor';
import { texts } from './src/utils/constants';
import MatchHeader from './src/components/MatchHeader';
import CommentaryFeed from './src/components/CommentaryFeed';

const App = () => {
  const [events, setEvents] = useState([]);
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [overs, setOvers] = useState(0);
  const [ballsInOver, setBallsInOver] = useState(0);
  const [batsmen, setBatsmen] = useState({ striker: texts.defaultStriker, nonStriker: texts.defaultNonStriker });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * mockEvents.length);
      const event = { ...mockEvents[randomIndex], timestamp: new Date().toLocaleTimeString() };
      processEvent(event, setScore, setWickets, setOvers, setBallsInOver, setBatsmen);
      setEvents(prev => [event, ...prev]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MatchHeader
        score={score}
        wickets={wickets}
        overs={overs}
        ballsInOver={ballsInOver}
        batsmen={batsmen}
      />
      <CommentaryFeed events={events} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default App;
