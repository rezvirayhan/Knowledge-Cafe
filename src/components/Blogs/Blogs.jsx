import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleMarkAsReed }) => {
    const [blogs, SetBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => SetBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog blog={blog} key={blog.Id} handleAddToBookmark={handleAddToBookmark} handleMarkAsReed={handleMarkAsReed}></Blog>)
            }
        </div>
    );
};
Blog.PropTypes = {
    handleAddToBookmark: PropTypes.func
}

export default Blogs;