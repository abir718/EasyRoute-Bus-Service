
const Offer = () => {
    return (
      <section className="mt-52 mb-20 mx-auto w-[80%] flex flex-col items-center gap-10">
        <h1 className="text-6xl font-bold">Best offers for you</h1>
        <div className="flex items-center gap-52">
        <div className="flex gap-6 items-center bg-yellow-400 w-[550px] px-16 rounded-2xl">
            <div>
                <h1 className="text-4xl font-bold py-1">15% OFF</h1>
                <p className="text-xl font-medium">on your next purchase</p>
                <p className="text-[rgba(0,0,0,0.5)]  text-lg font-medium py-1">Use by January 2024</p>
            </div>
            <img className="w-10" src="images/cupon-devider.png" alt="" />
            <div>
                <h1 className="text-3xl font-bold py-1">NEW15</h1>
                <p className="text-[rgba(0,0,0,0.5)] text-lg font-medium">Coupon Code</p>
            </div>
        </div>
        <div className="flex gap-4 items-center bg-red-400 w-[550px] px-16 rounded-2xl">
            <div>
                <h1 className="text-4xl font-bold py-1">20% OFF</h1>
                <p className="text-xl font-medium">on your next purchase</p>
                <p className="text-[rgba(0,0,0,0.5)]  text-lg font-medium py-1">Use by January 2024</p>
            </div>
            <img className="w-10" src="images/cupon-devider.png" alt="" />
            <div>
                <h1 className="text-3xl font-bold py-1">COUPLE20</h1>
                <p className="text-[rgba(0,0,0,0.5)] text-lg font-medium">Coupon Code</p>
            </div>
        </div>
        </div>
        <button className="text-green-500 font-medium text-2xl border-2 border-green-500 p-4 rounded-lg hover:bg-green-100">See All Offers</button>
      </section>
    );
};

export default Offer;