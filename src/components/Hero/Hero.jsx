import heroImg from '../../assets/Rectangle 4281.png';

const Hero = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
            <div
            className="w-full bg-center bg-cover"
            style={{
                backgroundImage: `url(${heroImg})`,
            }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-100 bg-opacity-80 py-12">
                    <div className="text-center">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-4xl mx-auto text-center">
                        <h2 className="mt-16 mb-16 text-xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                            I Grow By Helping People In Need
                        </h2>
                        <div>
                            <form className="max-w-sm mx-auto">
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                    </div>
                                    <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="Search here..."
                                    required
                                    />
                                    <button
                                    type="submit"
                                    className="text-white absolute end-2.5 bottom-2.5 bg-[#FF444A] hover:bg-[#FF444A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#FF444A] dark:hover:bg-[#FF444A] dark:focus:ring-[#FF444A]"
                                    >
                                    Search
                                    </button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;