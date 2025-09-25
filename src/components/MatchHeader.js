import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { texts } from '../utils/constants';

const MatchHeader = ({ score, wickets, overs, ballsInOver, batsmen }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.matchInfo}>
                {texts.teamIndia} vs {texts.teamAustralia} - {texts.matchType}
            </Text>
            <Text style={styles.score}>
                {texts.scoreLabel} {score}/{wickets}
            </Text>
            <Text style={styles.overs}>
                {texts.oversLabel} {overs}.{ballsInOver}
            </Text>
            <Text style={styles.batsmen}>
                {texts.strikerLabel} {batsmen.striker} | {texts.nonStrikerLabel} {batsmen.nonStriker}
            </Text>
            <Text style={styles.live}>
                {texts.live}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#4a90e2',
        alignItems: 'center',
    },
    matchInfo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    score: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    overs: {
        fontSize: 20,
        color: '#e8f4f8',
        marginTop: 5,
    },
    batsmen: {
        fontSize: 16,
        color: '#f0f8ff',
        marginTop: 5,
    },
    live: {
        fontSize: 14,
        color: '#ff6b6b',
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default MatchHeader;