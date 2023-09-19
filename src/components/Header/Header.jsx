import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-4 max-w-7xl mx-auto'>
            <h1 className="text-4xl font-bold ">
                Knowledg-Cafe
            </h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;