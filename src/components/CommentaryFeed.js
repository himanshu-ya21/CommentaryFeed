import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import EventItem from './EventItem';

const CommentaryFeed = ({ events }) => {
    return (
        <FlatList
            data={events}
            renderItem={({ item }) => <EventItem item={item} />}
            keyExtractor={(item, index) => item.timestamp || index.toString()}
            style={styles.feed}
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    feed: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
});

export default CommentaryFeed;