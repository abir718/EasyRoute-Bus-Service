const SelectSeat = () => {
    return (
        <div className="my-6">
            <h1 className="font-bold text-3xl">Select Your Seat</h1>
            <hr className="border-t border-gray-400 border-dashed my-4" />
            <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                <img src="/images/seat-gray.png" alt=""/>
                <p className="text-gray-500 text-lg font-medium">Available</p>
                </div>
                <div className="flex gap-1 items-center">
                <img src="/images/seat-green-filled.png" alt="" />
                <p className="text-gray-500 text-lg font-medium">Selected</p>
                </div>
                
            </div>
            <hr className="border-t border-gray-400 border-dashed my-4" />
            <div className='ml-[545px] w-20 rounded-lg flex items-center justify-center bg-gray-100 py-2'>
            <img className="h-6" src="/images/2087.png" alt="" />
            </div>

        </div>
    );
};

export default SelectSeat;
