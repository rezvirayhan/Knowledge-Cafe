import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, SetBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => SetBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            {/* <h1 className="text-4xl">Blogs: {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog blog={blog} key={blog.Id}></Blog>)
            }
        </div>
    );
};

export default Blogs;