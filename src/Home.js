import BlogList from "./blogs";
import useFetch from "./fetch";

const Home = () => {
    const {blogs:data,Loading,Err}=useFetch('http://localhost:3005/Blogs')
    const style={
        textAlign:"center",
    }
    return ( 
        <div className="home" style={style}>
            {Err && <div>{Err}</div>}
            {Loading && <div>Loading...</div>}
            {/* props (short for "properties") are a way to pass data from a parent component to a child component */}
            {data && <BlogList blogs={data} />}
        </div>
     );
}


export default Home;