import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Post = ({ post, navigation }: any) => {
    const { title, created_at: createdAt, url } = post.item

    return (
        <TouchableOpacity
        activeOpacity={.7}
            style={styles.container}
            onPress={() => navigation.navigate("PostInfoScreen", { post: post.item })}>
            <Text style={styles.itemTitleTxt}>Title</Text>
            <Text style={styles.itemDescTxt}>{title}</Text>
            <View style={styles.divider} />
            <Text style={styles.itemTitleTxt}>Created Date</Text>
            <Text style={styles.itemDescTxt}>{createdAt}</Text>
            <View style={styles.divider} />
            <Text style={styles.itemTitleTxt}>URL</Text>
            <Text style={styles.itemDescTxt}>{url}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 4,
        borderRadius: 4,
        padding: 16,
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
        marginHorizontal: 16
    },
    itemTitleTxt: {
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 4
    },
    itemDescTxt: {
        alignSelf: 'center',
        fontSize: 14
    },
    divider: {
        backgroundColor: '#ECECEC',
        height: 1,
        marginVertical: 12
    }
})

export default Post