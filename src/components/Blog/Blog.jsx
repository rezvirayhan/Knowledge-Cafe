import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog }) => {

    const { Title, Cover, Posted_date, hashtag, Reading_time, Author, Author_img } = blog
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={Cover} alt={`Cover Picture Of The Title ${Title}`} />

            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={Author_img} alt={`Cover Picture Of The Author ${Author}`} />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p><small>{Posted_date}</small></p>
                    </div>
                </div>
                <div>
                    <span>{Reading_time} min reed</span>
                    <button className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{Title}</h2>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;