import Seat from "./Seat";

const Others =({select , seatDeselect})=> {
    return (
        <div className="bg-gray-100 p-4 w-[450px] rounded-lg my-6">
        <div className="flex justify-between">
        <p className="font-medium">Seat</p>
        <p className="font-medium">Class</p>
        <p className="font-medium">Delete</p>
        </div>
        <hr className="border-t border-gray-400 border-dashed my-4" />
        <div className="flex flex-col gap-2">
        {select.map((a)=> (<Seat select={select} seatDeselect={seatDeselect} key={a} seat={a}></Seat>))}
        </div>
        <hr className="border-t border-gray-400 my-4" />
        <div className="flex justify-between">
            <p className="font-medium text-lg">Total Price</p>
            <p className="font-medium text-lg">{select.length*500}</p>
        </div>
        <div className="flex justify-between my-2">
        <input className="border-2 rounded-lg h-10 w-full px-2" type="text" placeholder="Have any coupon ?" name="" id="" />
        <button className="bg-[rgb(29,209,0)] py-2 px-4 text-white rounded-lg ml-2 text-lg">Apply</button>
        </div>
        <div className="flex justify-between">
            <p className="font-medium text-lg">Grand Total</p>
            <p className="font-medium text-lg">{select.length*500}</p>
        </div>
        </div>
    );
};



export default  Others;







