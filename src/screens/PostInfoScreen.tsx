import React from 'react'
import { Text, ScrollView } from 'react-native'

const PostInfoScreen = (props:any) => {
    const post = props.route.params.post
    return (
        <ScrollView>
            <Text>{JSON.stringify(post)}</Text>
        </ScrollView>
    )
}

export default PostInfoScreen