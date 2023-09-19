import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, redingTime }) => {
    return (
        <div className="md:w-1/3">

            <h1 className="ml-4 p-4 bg-black text-white text-2xl font-bold">BookMarks Blogs: {bookmarks.length}</h1>
            <h1 className="ml-4 mb-2 p-4 bg-gray-600 text-white text-2xl font-bold">Reding Time: {redingTime}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;