import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, SetBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => SetBlogs(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Blogs;