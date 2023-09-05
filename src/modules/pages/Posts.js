import jsonData from '../post/components/PostInfo.json';
import Post from "../post/components/post/Post";
import PostsStyle from "../post/components/styles/post.module.css";

const Posts = () => {
  return (
      <>
      <div className={PostsStyle.wrapper}>
        <Post data={jsonData.post}></Post>
      </div>







      </>
  );
}

export default Posts;
