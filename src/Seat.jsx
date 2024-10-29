
const Seat = ({seat , seatDeselect}) => {
    return (
        <div className="flex justify-between">
           <p className="font-medium text-gray-500">{seat}</p>
           <p className="font-medium text-gray-500">Economy</p> 
           <button className="hover:bg-gray-300 w-8 h-8 flex items-center justify-center rounded-lg"><img className="w-4 h-4" src="/images/1214428.png" onClick={() => {seatDeselect(seat)}} alt="" /></button>
        </div>


    );
};

export default Seat;