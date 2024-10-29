
const Ticket = () => {
    return (
    <section>
        <div className=" w-[80%] mx-auto flex flex-col items-center gap-10 my-10">
        <div className="flex flex-col items-center gap-6">
            <h1 className="font-bold text-4xl mt-20">EasyRoute</h1>
            <p className="font-medium text-xl text-gray-500 text-center">Yes, you can run unit tests and view the results directly within the app. The integrated <br />testing features allow for a streamlined .</p>
        </div>
        <div className="flex items-center bg-white w-fit px-16 rounded-lg">
        <div>
        <div className="flex items-center w-[800px] justify-between">
            <div className="flex items-center gap-4">
            <img src="/images/bus-logo.png" alt="" />
            <div>
                <h1 className="text-3xl font-bold">EasyRoute Bus Service</h1>
                <p className="text-lg font-medium text-gray-700">AC_Business</p>
            </div>
            </div>
            <div className="flex items-center gap-2 p-2 w-fit border-2 border-green-400 rounded-lg bg-green-100">
                <img src="images/seat-green.png" alt="" />
                <p className="text-[#22c55e] text-lg font-medium">40 Seats Left</p>
            </div>
        </div>
        <div className="bg-gray-100 w-[800px] p-8 mt-4 rounded-lg">
            <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-gray-700">Route</p>
            <p className="text-lg font-medium">Dhaka-Sylhet</p>
            </div>
            <hr className="border-t border-gray-400 border-dashed my-4" />
            <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-gray-700">Departure Time</p>
            <p className="text-lg font-medium">11:00 AM</p>
            </div>
            <hr className="border-t border-gray-400 border-dashed my-4" />
            <div className="flex items-center justify-between">
                <p className="text-lg font-medium bg-gray-200 w-fit rounded-lg px-4 py-2">Boarding Point - Laxmipur</p>
                <p className="text-lg font-medium bg-gray-200 w-fit rounded-lg px-4 py-2">Dropping Point - Bogura</p>
                <p className="text-lg font-medium bg-gray-200 w-fit rounded-lg px-4 py-2">Est. Time - 11 Hour</p>
            </div>
        </div>
        </div>
        <img src="/images/info-devider.png" alt="" />
        <div className="flex flex-col items-center">
            <img src="/images/fare.png" alt="" />
            <h1 className="font-bold text-4xl ">550 Taka</h1>
            <p className="text-2xl font-medium text-gray-500">Per Seat</p>
        </div>
        </div>
        </div>
    </section>
    );
};

export default Ticket;