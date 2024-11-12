import React from 'react';

const Header = ({loggedInUserData}) => {
    return (
        <div className=" header flex items-end justify-between">
        <h1 className="text-3xl font-medium">Hello <br /> <span className="text-4xl font-semibold">{loggedInUserData.first_name} 👋</span> </h1>
        <button className="px-5 py-2 bg-purple-700 rounded-md text-white text-xl">Log out</button>
    </div>
    );
};

export default Header;