import React, { useEffect, useState } from 'react';
import Posts from '../components/Posts';

async function fetchPosts() {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await data.json();
    return json.slice(0, 5);
  } catch (err) {
    console.log(err);
  }
}
function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    fetchPosts().then((apiPosts) => {
      setAppState({ loading: false, posts: apiPosts });
    });
  }, []);

  return <Posts isLoading={appState.loading} posts={appState.posts} />;
}
export default Home;
