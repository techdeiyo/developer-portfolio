// Import fetchAPI function from your project
import { fetchAPI } from '../api/api';

async function getAllPosts() {
  const query = `
    query {
      posts {
        nodes {
          title
          content
          // Add other fields you need
        }
      }
    }
  `;

  try {
    const data = await fetchAPI(query);
    return data.posts.nodes;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
}

// Call the function to get all posts
const allPosts = await getAllPosts();
console.log(allPosts);