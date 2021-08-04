const baseUrl = "https://hn.algolia.com/api/v1"

export const getPosts = async (pageNumber:number) => {
    
    console.log("PAGE_NUMBER: ", pageNumber);
    
    const result = await fetch(`${baseUrl}/search_by_date?tags=story&page=${pageNumber}`)
    if (result.status !== 200) {
        console.log("Error while hitting API", result)
        return null
    }
    const posts = await result.json()
    return posts.hits
}