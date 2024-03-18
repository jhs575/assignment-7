export default function Header() {
    return (
        <header className="container mx-auto pt-8 px-6 lg:px-0">
            <div className="navbar mb-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden px-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex="0"
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                            <li className="hover:bg-green-400 rounded-lg text-[#5B546A}"><a>Home</a></li>
                            <li className="hover:bg-green-400 rounded-lg text-[#5B546A}"><a>Recipes</a></li>
                            <li className="hover:bg-green-400 rounded-lg text-[#5B546A}"><a>About</a></li>
                            <li className="hover:bg-green-400 rounded-lg text-[#5B546A}"><a>Search</a></li>
                        </ul>
                    </div>
                    <a className=" px-2 text-2xl lg:px-4 lg:py-2 lg:text-3xl lg:font-bold hover:bg-green-400 rounded-2xl"
                        onClick={() => location.reload()}>Food Land</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="hover:bg-green-400 rounded-lg text-[#5B546A}"><a>Home</a></li>
                        <li className="hover:bg-green-400 rounded-lg text-[#5B546A}"><a>Recipes</a></li>
                        <li className="hover:bg-green-400 rounded-lg text-[#5B546A}"><a>About</a></li>
                        <li className="hover:bg-green-400 rounded-lg text-[#5B546A}"><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex flex-row gap-3 items-center">
                    <div className="border-2 rounded-2xl items-center flex gap-1 overflow-hidden">
                        <i className='bx bx-search p-2'></i>
                        <input type="text" placeholder="Search" />
                    </div>
                    <i
                        className='bx bx-user-circle bg-green-500 p-2 leading-[30px] rounded-full text-3xl hover:bg-green-400'></i>
                </div>
            </div>
        </header>
    )
}