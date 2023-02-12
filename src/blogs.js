import { Link } from "react-router-dom";

const BlogList = (props) => {
    const b = props.blogs;
    const styles={
        padding:'2px',
        margin:'15px auto',
        borderRadius:'8px',
        width:'500px',
        backgroundColor:'rgb(224, 223, 223)'
    }
    return ( 
        <div className="blog-list">
            <h1 style={{color:'black'}}>All blogs!</h1>
            {b.map(blog=>(
                <div className="blog-preview" key={blog.id} style={styles}>
                    <Link to={'/blogs/'+blog.id}>
                        <h2 style={{color:'red'}}>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;