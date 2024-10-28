

const Header = () => {
    return (
        <header className="mx-auto w-[80%]">
            <div className=" mt-14 flex items-center justify-between">
        <h1 className="text-4xl font-medium">EasyRoute</h1>
        <div className="flex items-center gap-8">
            <ul className="text-gray-600 text-lg font-medium">Home</ul>
            <ul className="text-gray-600 text-lg font-medium">About</ul>
            <ul className="text-gray-600 text-lg font-medium">Destination</ul>
            <ul className="text-gray-600 text-lg font-medium">Search</ul>
        </div>
            <div className="flex items-center gap-2 p-2 w-fit border-2 border-green-400 rounded-lg bg-green-100">
                <p className="text-[#22c55e] text-lg font-medium">Bus</p>
                <img src="/images/bus-icon.png" alt="" />
            </div>
            </div>
            <div className="bg-[url('/images/banner.png')] bg-cover bg-center h-[600px] w-full flex flex-col items-center justify-evenly mt-10 bg-no-repeat rounded-3xl p-32">
            <h1 className="text-7xl font-bold text-white">End-To-End Travel With</h1>
            <h1 className="text-7xl font-bold text-green-500">EasyRoute</h1>
            <p className="text-2xl text-gray-200 text-center">Yes, you can run unit tests and view the results directly within the app. The integrated testing <br /> features allow for a streamlined .</p>
            <button className="text-xl font-medium bg-green-500 p-4 rounded-lg hover:bg-transparent border-2 border-green-500">Buy Tickets</button>
            </div>
            <div className="flex items-center gap-10 absolute top-[720px] left-0 right-0 justify-center">
                <div className="flex items-center gap-2 border-b-4 w-fit p-6 bg-white rounded-lg border-green-500">
                    <img src="images/people.png" alt="" />
                    <div>
                        <h1 className="text-4xl font-bold mb-2">500K+</h1>
                        <p className="text-xl font-medium text-gray-500">Registered Users</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border-b-4 w-fit p-6 bg-white rounded-lg border-green-500">
                    <img src="images/people.png" alt="" />
                    <div>
                        <h1 className="text-4xl font-bold mb-2">500K+</h1>
                        <p className="text-xl font-medium text-gray-500">Registered Users</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border-b-4 w-fit p-6 bg-white rounded-lg border-green-500">
                    <img src="images/people.png" alt="" />
                    <div>
                        <h1 className="text-4xl font-bold mb-2">500K+</h1>
                        <p className="text-xl font-medium text-gray-500">Registered Users</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;