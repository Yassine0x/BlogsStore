import { useState ,useEffect} from "react";
const useFetch=(url)=>{
    //useState used to store data that changes over time, such as user input, form submissions, and API responses
    const [blogs, setBlogs]=useState(null);
    /*const handleDelete=(id)=>{
        const newBlogs = blogs.filter(blog=>blog.id !== id);
        setBlogs(newBlogs);
    }*/
    const [Loading,setLoading]=useState(true)
    const [Err,setError]=useState(null)
    //useEffect is a hook that execute every render of a component
    useEffect(()=>{
        //AbortController is an object that allows you to programmatically abort one or more Web API's (e.g. Fetch, XHR) that are in progress.
        const abrtCont = new AbortController();

        fetch(url, {signal: abrtCont.signal})
        .then(res=>{
            if(!res.ok){
                throw Error('could not fetch the data for that resource');
            }
            return res.json()
        }).then(data=>{
            setBlogs(data)
            setLoading(false)
            setError(null)
        })
        .catch(err=>{
            if(err.name==='AbortError'){
                console.log('cleanup');
            }else{
                setLoading(false);
                setError(err.message);
        }
        })
        return ()=>abrtCont.abort();
        
    },[url])
    return {blogs,Loading,Err}
}
export default useFetch;