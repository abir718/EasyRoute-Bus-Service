

const Footer = () => {
    return (
    <section className="bg-gray-950 h-[300px] flex items-center">
        <div className="w-[80%] mx-auto">
            <div className="flex items-center justify-between">
            <div>
            <h1 className="font-medium text-3xl text-white">EasyRoute App</h1>
            <p className=" text-gray-400 mt-2">EasyRoute is a digital platform to make your <br />daily commuting better.</p>
        </div>
        <div>
            <p className="text-white font-medium">Download Our App</p>
            <div className="bg-black w-fit border-2 border-white flex items-center gap-2 py-1 px-2 rounded-lg mt-2">
            <img src="/images/playstore.png" alt="" />
            <div>
                <p className="font-medium text-sm text-white">GET IT ON</p>
                <p className="font-medium text-xl text-white">Google Play</p>
            </div>
            </div>

        </div>
            </div>
        <hr className="border-t border-gray-400 border-dashed mt-16 mb-4" />
        <div className="flex items-center justify-between">
            <p className=" text-gray-400">@all rights reserved, EasyRoute services limited.2024</p>
            <div className="flex items-center gap-6">
                <p className="text-white font-medium">Terms & condition</p>
                <p className="text-white font-medium">Return & refund policy</p>
                <p className="text-white font-medium">Privacy policy</p>
            </div>
        </div>
        </div>

    </section>
    );
};

export default Footer;