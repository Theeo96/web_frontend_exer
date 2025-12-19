import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        // "https://jsonplaceholder.typicode.com/posts"
        "https:jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data); // 먼저 콘솔에서 확인!
      // setPosts(data);
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))} */}
      <p>--userlist--</p>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </>
  );
}

export default Posts;
