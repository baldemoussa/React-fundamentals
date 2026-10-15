import { useState, useEffect } from "react";
import Rotate from "./Rotate";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function PostFetcher() {
  const [post, setPost] = useState<Post | null>(null);
  const [postId, setPostId] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // set loading and clear the error state
        setLoading(true);
        setError(null);

        // fetch data
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = await res.json();

        // update post data
        console.log(postData);
        setPost(postData);
      } catch (error: unknown) {
          console.error(error);
        if (error instanceof Error) {
            setError(error.message);
        } else {
            setError("Something went really bad!")
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const onPreviousPost = () => {
    setPostId(prevId => Math.max(prevId - 1, 1));
  }

  const onNextPost = () => {
    setPostId(prevId => Math.min(prevId + 1, 100));
  }

  return (
    <div>
        <div>
            <button onClick={onPreviousPost} disabled={postId === 1}>
                Previous Post
            </button>
            <p>Currently viewing post ID: {postId}</p>
            <button onClick={onNextPost} disabled={postId === 100}>
                Next Post
            </button>
        </div>
        
      {loading && <h3>Loading post...</h3>}

      {error && <h3>{error}</h3>}

      {post && (
          <div>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
          </div>
        )}

        <Rotate />
    </div>
  );
}

export default PostFetcher;