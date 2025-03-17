const Ticket = () => {
    return (
        <section className="px-4">
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-10 my-10">
                <div className="flex flex-col items-center gap-6 text-center">
                    <h1 className="font-bold text-3xl md:text-4xl mt-10 md:mt-20">EasyRoute</h1>
                    <p className="font-medium text-lg md:text-xl text-gray-500">Yes, you can run unit tests and view the results directly within the app. The integrated <br className="hidden md:block" /> testing features allow for a streamlined experience.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center bg-white w-full md:w-fit px-6 md:px-16 rounded-lg shadow-lg">
                    <div className="w-full md:w-[800px] p-4">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src="/images/bus-logo.png" alt="Bus Logo" className="" />
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold">EasyRoute Bus Service</h1>
                                    <p className="text-lg font-medium text-gray-700">AC_Business</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-2 border-2 border-green-400 rounded-lg bg-green-100 mt-4 md:mt-0">
                                <img src="/images/seat-green.png" alt="Seats Left" className="w-6 h-6" />
                                <p className="text-[#22c55e] text-lg font-medium">40 Seats Left</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-6 md:p-8 mt-4 rounded-lg">
                            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                                <p className="text-lg font-medium text-gray-700">Route</p>
                                <p className="text-lg font-medium">Dhaka-Sylhet</p>
                            </div>
                            <hr className="border-t border-gray-400 border-dashed my-4" />
                            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                                <p className="text-lg font-medium text-gray-700">Departure Time</p>
                                <p className="text-lg font-medium">11:00 AM</p>
                            </div>
                            <hr className="border-t border-gray-400 border-dashed my-4" />
                            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                                <p className="text-lg font-medium bg-gray-200 w-fit rounded-lg px-4 py-2">Boarding Point - Laxmipur</p>
                                <p className="text-lg font-medium bg-gray-200 w-fit rounded-lg px-4 py-2">Dropping Point - Bogura</p>
                                <p className="text-lg font-medium bg-gray-200 w-fit rounded-lg px-4 py-2">Est. Time - 11 Hour</p>
                            </div>
                        </div>
                    </div>
                    <img src="/images/info-devider.png" alt="Divider" className="hidden md:block w-12 h-auto" />
                    <div className="flex flex-col items-center mt-6 md:mt-0">
                        <img src="/images/fare.png" alt="Fare" className="w-16 h-16" />
                        <h1 className="font-bold text-3xl md:text-4xl">550 Taka</h1>
                        <p className="text-xl md:text-2xl font-medium text-gray-500">Per Seat</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ticket;