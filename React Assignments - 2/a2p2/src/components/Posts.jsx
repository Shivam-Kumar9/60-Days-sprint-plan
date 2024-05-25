import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true)
    {
      /*Complete the missing code*/
    }
    try {
      {/*Complete the missing code*/ }
      setLoading(false)
       let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
       setPosts(res?.data)
       console.log(res.data);
    } catch (error) {
      { 
        /*Complete the missing code*/
      }
      setLoading(false)
      setError(true)
    }
  }

  useEffect(/*Complete the missing code*/
    ()=>{
      fetchAndUpdateData()
    },[]
  );
   
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
 console.log(posts);
  return (
    <div>
      <h1>List of Posts</h1>

      {/*Complete the missing code    */
       posts.map((post)=>(<Post {...post} key={post.id}/>))}
      
    </div>
  );
}

export default Posts;
