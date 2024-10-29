

const Form = () => {
    return (
        <div className="flex flex-col gap-4 w-[450px] my-4">
            <div className="flex flex-col gap-2">
                <p className="font-medium text-lg">Passengers Name*</p>
                <input className="border-2 w-[450px] h-12 p-2 rounded-lg" placeholder="Enter your name" type="text" name="" id="" />
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-medium text-lg">Phone Number*</p>
                <input className="border-2 w-[450px] h-12 p-2 rounded-lg" placeholder="Enter your mobile number" type="text" name="" id="" />
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-medium text-lg">Email ID</p>
                <input className="border-2 w-[450px] h-12 p-2 rounded-lg" placeholder="Enter your Email Address" type="text" name="" id="" />
            </div>
            <button className="bg-[rgb(29,209,0)] py-2 px-4 text-white text-lg rounded-lg w-full">Next</button>
            <div className="flex items-center justify-between">
                <p className="text-gray-500 underline">Terms and Conditions</p>
                <p className="text-gray-500 underline">Cancellation Policy</p>
            </div>
        </div>
    );
};

export default Form;