import { useState, useEffect } from "react";
import Seat from "./Seat";
import { toast } from "react-toastify";

const Others = ({ select, seatDeselect }) => {
    const totalPrice = select.length * 500;
    const [discount, setDiscount] = useState(totalPrice);
    const [coupon, setCoupon] = useState("");
    const [appliedCoupon, setAppliedCoupon] = useState(null);

    useEffect(() => {
        if (!appliedCoupon) {
            setDiscount(totalPrice);
        } else {
            applyDiscount(appliedCoupon);
        }
    }, [totalPrice]);

    const applyDiscount = (code) => {
        let discountRate = 0;
        if (code === "NEW15") discountRate = 15;
        if (code === "COUPLE20") discountRate = 20;
        if (code === "EASY30") discountRate = 30;

        if (discountRate > 0) {
            const newPrice = totalPrice - (totalPrice * (discountRate / 100));
            setDiscount(newPrice);
            setAppliedCoupon(code);
        } else {
            toast.error("Invalid Coupon Code");
        }
    };

    const couponApply = () => {
        if (!appliedCoupon) {
            applyDiscount(coupon);
        } else {
            toast.error("You have already applied a coupon!");
        }
    };

    return (
        <div className="bg-gray-100 w-fit p-4 rounded-lg my-6">
            <div className="flex justify-between">
                <p className="font-medium">Seat</p>
                <p className="font-medium">Class</p>
                <p className="font-medium">Delete</p>
            </div>
            <hr className="border-t border-gray-400 border-dashed my-4" />
            <div className="flex flex-col gap-2">
                {select.map((a) => (
                    <Seat select={select} seatDeselect={seatDeselect} key={a} seat={a} />
                ))}
            </div>
            <hr className="border-t border-gray-400 my-4" />
            <div className="flex justify-between">
                <p className="font-medium text-lg">Total Price</p>
                <p className="font-medium text-lg">{totalPrice}</p>
            </div>
            <div className="flex justify-between my-2">
                <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="border-2 rounded-lg h-10 w-full px-2"
                    type="text"
                    placeholder="Have any coupon?"
                />
                <button
                    onClick={couponApply}
                    className="bg-[rgb(29,209,0)] py-2 px-4 text-white rounded-lg ml-2 text-lg"
                >
                    Apply
                </button>
            </div>
            <div className="flex justify-between">
                <p className="font-medium text-lg">Grand Total</p>
                <p className="font-medium text-lg">{discount}</p>
            </div>
        </div>
    );
};

export default Others;
