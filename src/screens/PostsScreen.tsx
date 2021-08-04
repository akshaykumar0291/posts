import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList, TextInput, StyleSheet } from 'react-native'
import { getPosts } from "../api/postsApi";
import Post from '../components/Post';

const PostsScreen = ({ navigation }: any) => {
    const [pageNumber, setPageNumber] = useState(0)
    const [posts, setPosts] = useState([] as any)
    const [filteredPosts, setFilteredPosts] = useState([] as any)
    const [title, setTitle] = useState('')

    useEffect(() => {
        getPosts(pageNumber).then(response => setPosts([...posts, ...response]))
    }, [pageNumber])

    useEffect(() => {
        const interval = setInterval(() => {
            setPageNumber(pageNumber => pageNumber + 1)
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const filteredPosts = filterPostsByTtile(title);
        setFilteredPosts(filteredPosts)
    }, [title])

    const filterPostsByTtile = (title: string) => {
        const filteredPosts = posts.filter((post: any) => post.title.includes(title))
        return filteredPosts
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder={"Enter title to filter"}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={title ? filteredPosts : posts}
                renderItem={post => <Post post={post} navigation={navigation} />}
                onEndReachedThreshold={0.9}
                onEndReached={() => { setPageNumber(pageNumber + 1) }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle: {
        backgroundColor: '#FFFFFF',
        margin: 16,
        paddingHorizontal: 16,
        elevation: 2,
        borderRadius: 4,
        height: 48
    }
})

export default PostsScreen