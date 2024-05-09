// api.js
export async function fetchPosts() {
    const response = await fetch('https://techdeiyo.com/wp-json/wp/v2/posts');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}