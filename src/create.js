import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const styles={
        display:'flex',
        flexDirection:'column',
        padding:'2px',
        margin:'15px auto',
        borderRadius:'8px',
        width:'300px',
        height:'400px',
        justifyContent:'space-between'

    }
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setauthor]=useState('Mohammed');
    const [isPending,setIspending]=useState(false);
    //useHistory is a hook in React that allows developers to access the browser's history and navigate between pages
    const history=useHistory();
    const submitHandle=(e)=>{
        setIspending(true);
        e.preventDefault();
        const blog={title,body,author};
        console.log(blog);
        fetch('http://localhost:3005/Blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(
            setIspending(false),
            history.push('/')
        )
    }
    return ( 
        
        <div className="create" style={styles}>
            <h2>Add new blog:</h2>
            <form onSubmit={submitHandle} style={styles}>
                <label>Blog title :</label>
                <input 
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body :</label>
                <textarea
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label >Blog author</label>
                <select 
                value={author}
                onChange={(e)=>setauthor(e.target.value)}
                >
                    <option value="Mohammed">Mohammed</option>
                    <option value="Voltaire">Voltaire</option>
                </select>
                {!isPending && <button>add blog</button>}
                {isPending && <button disabled>Pending...</button>}
            </form>
        </div>
     );
}
 
export default Create;