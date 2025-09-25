import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/themes';

const eventConfig = {
    BALL: { style: 'event', icon: '⚾' },
    BOUNDARY: { style: 'boundaryEvent', icon: '🏏' },
    WICKET: { style: 'wicketEvent', icon: '❌' },
    MATCH_STATUS: { style: 'statusEvent', icon: '📢' },
    UNKNOWN: { style: 'event', icon: '⚾' },
};

const EventItem = ({ item }) => {
    const config = eventConfig[item.type] || eventConfig.UNKNOWN;
    const style = styles[config.style];

    return (
        <View style={style}>
            <Text style={styles.icon}>
                {config.icon}
            </Text>
            <View style={styles.content}>
                <Text style={styles.commentary}>
                    {item.payload.commentary}
                </Text>
                {item.type === 'WICKET' && <Text style={styles.dismissal}>{item.payload.dismissal}</Text>}
                {item.type === 'MATCH_STATUS' && <Text style={styles.summary}>{item.payload.summary}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    event: {
        flexDirection: 'row',
        padding: 15,
        margin: 10,
        backgroundColor: colors.eventBackground,
        borderRadius: 5,
        borderLeftWidth: 5,
        borderLeftColor: colors.eventBorder,
    },
    boundaryEvent: {
        flexDirection: 'row',
        padding: 15,
        margin: 10,
        backgroundColor: colors.boundaryBackground,
        borderRadius: 5,
        borderLeftWidth: 5,
        borderLeftColor: colors.boundaryBorder,
    },
    wicketEvent: {
        flexDirection: 'row',
        padding: 15,
        margin: 10,
        backgroundColor: colors.wicketBackground,
        borderRadius: 5,
        borderLeftWidth: 5,
        borderLeftColor: colors.wicketBorder,
    },
    statusEvent: {
        flexDirection: 'row',
        padding: 15,
        margin: 10,
        backgroundColor: colors.statusBackground,
        borderRadius: 5,
        borderLeftWidth: 5,
        borderLeftColor: colors.statusBorder,
    },
    icon: {
        fontSize: 20,
        marginRight: 10,
    },
    content: {
        flex: 1,
    },
    commentary: {
        fontSize: 16,
        color: colors.textPrimary,
    },
    dismissal: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#721c24',
        marginTop: 5,
    },
    summary: {
        fontSize: 14,
        color: '#0c5460',
        marginTop: 5,
    },
});

export default EventItem;