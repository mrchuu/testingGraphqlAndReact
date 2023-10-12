import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
const blogQuery = gql`{
  query($input:BlogDisplayInput) {
    getBlogsPaginated(input:$input){
      title
      content
      blogId
      postDate
      poster{
        userName
      }
    }
  }
}`;

function App() {
  const {data, loading, error} = useQuery(blogQuery);
  if(loading) return "Loading";
  if(error) return <pre>{error.message}</pre>
  return (
    <div>
      <h1>Blogs List</h1>
      <ul>
        {
          data.getBlogsPaginated.map((blog)=>(
            <li key={blog.blogId}>
              <pre>
                {blog.blogId}
                {blog.title}
                {blog.content}
                {}
              </pre>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
