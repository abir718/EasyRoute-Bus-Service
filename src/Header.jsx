import { FiUser } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";

const Header = () => {
    return (
        <header className="mx-auto w-[80%]">
            <div className="mt-4 flex items-center justify-between">
                <h1 className="text-4xl font-medium">EasyRoute</h1>
                <div className="hidden md:flex items-center gap-8">
                    <ul className="text-gray-600 text-lg font-medium">Home</ul>
                    <ul className="text-gray-600 text-lg font-medium">Bus Service</ul>
                    <ul className="text-gray-600 text-lg font-medium">Coupons</ul>
                </div>
                <div className="flex items-center gap-2 p-2 w-fit border-2 border-green-400 rounded-lg bg-green-100">
                    <p className="text-[#22c55e] text-lg font-medium">Bus</p>
                    <img src="/images/bus-icon.png" alt="" />
                </div>
            </div>
            <div className="bg-[url('/images/banner.png')] bg-cover bg-center h-[600px] w-full flex flex-col items-center justify-evenly mt-10 bg-no-repeat rounded-3xl p-6 md:p-32">
                <h1 className="text-4xl md:text-7xl font-bold text-white">End-To-End Travel With</h1>
                <h1 className="text-4xl md:text-7xl font-bold text-[#22c55e]">EasyRoute</h1>
                <p className="text-lg md:text-2xl text-gray-200 text-center">Yes, you can run unit tests and view the results directly within the app. The integrated testing features allow for a streamlined runtes.</p>
                <button className="text-lg md:text-xl font-medium bg-[#22c55e] p-3 md:p-4 rounded-lg hover:bg-transparent border-2 border-[#22c55e]">Buy Tickets</button>
            </div>
            <h1 className="lg:text-4xl text-2xl text-center font-bold py-6 mt-8">Why Choose Us ?</h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-20 justify-center">
                    
                <div className="flex items-center gap-2 border-b-4 w-[280px] p-4 bg-white rounded-lg border-[#22c55e]">
                    <LuUsers className="size-16 text-[#22c55e]" />
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-2">500K+</h1>
                        <p className="text-lg md:text-xl font-medium text-gray-500">Registered Users</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border-b-4 w-[280px] p-4 bg-white rounded-lg border-[#22c55e]">
                    <FiUser className="size-16 text-[#22c55e]"/>
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-2">25+</h1>
                        <p className="text-lg md:text-xl font-medium text-gray-500">Ticket Outlet</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border-b-4 w-[280px] p-4 bg-white rounded-lg border-[#22c55e]">
                    <RiCustomerServiceLine className="size-16 text-[#22c55e]"/>
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-2">24/7</h1>
                        <p className="text-lg md:text-xl font-medium text-gray-500">Customer Care</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border-b-4 w-[280px] p-4 bg-white rounded-lg border-[#22c55e]">
                    <GrMoney className="size-16 text-[#22c55e]"/>
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-2">$$</h1>
                        <p className="text-lg md:text-xl font-medium text-gray-500">Budget Friendly</p>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
