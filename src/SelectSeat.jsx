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

        </div>
    );
};

export default SelectSeat;
