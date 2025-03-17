import { useState } from "react";



const Offer = () => {

    let [more, setMore] = useState(false)

    let showMore = () => {
        setMore(true)
    }
    console.log(more)
    return (
        <section className="mt-20 mb-20 mx-auto w-[80%] flex flex-col items-center gap-10">
            <h1 className="text-4xl font-bold">Best offers for you</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-44">
                <div className="flex gap-6 items-center bg-yellow-400 w-full px-12 rounded-2xl">
                    <div>
                        <h1 className="text-xl lg:text-3xl font-bold py-1">15% OFF</h1>

                        <p className="text-[rgba(0,0,0,0.5)]  text-lg font-medium py-1">Use by December 2025</p>
                    </div>
                    <img className="w-10" src="images/cupon-devider.png" alt="" />
                    <div>
                        <h1 className="text-xl lg:text-3xl font-bold py-1">NEW15</h1>
                        <p className="text-[rgba(0,0,0,0.5)] text-lg font-medium">Coupon Code</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center bg-red-400 w-full px-12 rounded-2xl">
                    <div>
                        <h1 className="text-xl lg:text-3xl font-bold py-1">20% OFF</h1>

                        <p className="text-[rgba(0,0,0,0.5)]  text-lg font-medium py-1">Use by December 2025</p>
                    </div>
                    <img className="w-10" src="images/cupon-devider.png" alt="" />
                    <div>
                        <h1 className="text-xl lg:text-3xl font-bold py-1">COUPLE20</h1>
                        <p className="text-[rgba(0,0,0,0.5)] text-lg font-medium">Coupon Code</p>
                    </div>
                </div>


            </div>
            {more ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-44">
                    <div className="flex gap-4 items-center bg-green-400 w-full px-12 rounded-2xl">
                        <div>
                            <h1 className="text-xl lg:text-3xl font-bold py-1">30% OFF</h1>
                            <p className="text-[rgba(0,0,0,0.5)]  text-lg font-medium py-1">Use by December 2025</p>
                        </div>
                        <img className="w-10" src="images/cupon-devider.png" alt="" />
                        <div>
                            <h1 className="text-xl lg:text-3xl font-bold py-1">EASY30</h1>
                            <p className="text-[rgba(0,0,0,0.5)] text-lg font-medium">Coupon Code</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center bg-blue-400 w-full px-12 rounded-2xl">
                        <div>
                            <h1 className="text-xl lg:text-3xl font-bold py-1">20% OFF</h1>
                            <p className="text-[rgba(0,0,0,0.5)]  text-lg font-medium py-1">Use by December 2025</p>
                        </div>
                        <img className="w-10" src="images/cupon-devider.png" alt="" />
                        <div>
                            <h1 className="text-xl lg:text-3xl font-bold py-1 ">COUPLE20</h1>
                            <p className="text-[rgba(0,0,0,0.5)] text-lg font-medium">Coupon Code</p>
                        </div>
                    </div>
                </div>) : ""}
            <button onClick={showMore} className={` ${more ? "hidden" : ""} text-green-500 font-medium text-2xl border-2 border-green-500 p-4 rounded-lg hover:bg-green-100`}>See All Offers</button>
        </section>
    );
};

export default Offer;