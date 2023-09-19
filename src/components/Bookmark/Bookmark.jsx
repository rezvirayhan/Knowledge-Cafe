
const Bookmark = ({ bookmark }) => {
    const { Title } = bookmark;
    return (
        <div className="bg-gray-300 ml-4 p-4 mb-1">
            <h3 className="text-2xl">{Title}</h3>
        </div>
    );
};

export default Bookmark;