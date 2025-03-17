

const Footer = () => {
    return (
        <section className="bg-gray-950 py-8 flex items-center">
            <div className="lg:w-[80%] w-[95%] mx-auto">
                <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-between">
                    <div className="lg:text-start text-center">
                        <h1 className="font-medium text-3xl text-white">EasyRoute App</h1>
                        <p className=" text-gray-400 mt-2">EasyRoute is a digital platform to make your <br />daily commuting better.</p>
                    </div>
                    <div>
                        <p className="text-white font-medium lg:text-start text-center">Download Our App</p>
                        <div className="bg-black w-fit border-2 border-white flex items-center gap-2 py-1 px-2 rounded-lg mt-2">
                            <img src="/images/playstore.png" alt="" />
                            <div>
                                <p className="font-medium text-sm text-white">GET IT ON</p>
                                <p className="font-medium text-xl text-white">Google Play</p>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="border-t border-gray-400 border-dashed lg:mt-16 mt-4 mb-4" />
                <div className="lg:flex items-center justify-between text-center">
                    <div className="lg:flex items-center gap-6">
                        <p className="text-white font-medium">Terms & condition</p>
                        <p className="text-white font-medium">Return & refund policy</p>
                        <p className="text-white font-medium">Privacy policy</p>
                    </div>
                    <p className=" text-gray-400">@all rights reserved, EasyRoute services limited.2024</p>

                </div>
            </div>

        </section>
    );
};

export default Footer;