import { useHistory, useParams } from "react-router-dom";
import useFetch from './fetch'

const BlogDetails = () => {
    const styles={
        padding:'2px',
        margin:'15px auto',
        borderRadius:'8px',
        width:'800px',

    }
    const { id } = useParams();
    const history=useHistory();
    const {blogs:blog,Loading,Err}=useFetch('http://localhost:3005/Blogs/'+id);
    const handleDelete=()=>{
        fetch('http://localhost:3005/Blogs/'+id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/')
        }
            
        )
    }
    return ( 
        <div className="blog-detail" style={styles}>
            {Loading && <div>Loading...</div>}
            {Err && <div>{Err}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button style={{backgroundColor:'rgb(250, 97, 97)',padding:'10px',border:'none',borderRadius:'10px'}} onClick={handleDelete}>remove</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;