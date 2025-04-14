import Profile from "./assets/profile.webp";

function Portfolio() {
    return (
        <div className="bg-[#161616] min-h-screen pt-5 md:pt-10 flex flex-col items-center px-4 sm:px-6 lg:px-8">
            {/* Header - responsive */}
            <header className='Header flex flex-col sm:flex-row h-auto sm:h-[50px] items-center max-w-[1400px] w-full gap-4 sm:gap-0 mb-8 sm:mb-0'>
                <div className='text-[#F25134] text-xl sm:text-2xl mr-0 sm:mr-4 w-full sm:w-auto text-center sm:text-left'>Ranveer</div>

                <div className='border border-gray-700 bg-[#1B1B1B] w-full rounded-3xl px-4 sm:px-8 md:px-20 py-3 sm:py-4'>
                    <ul className='flex justify-between gap-2 sm:gap-4 text-sm sm:text-base'>
                        <li className='text-[#F25134] cursor-pointer hover:opacity-80 transition'>ABOUT</li>
                        <li className='text-white cursor-pointer hover:opacity-80 transition'>PORTFOLIO</li>
                        <li className='text-white cursor-pointer hover:opacity-80 transition'>CONTACT</li>
                    </ul>
                </div>
            </header>

            {/* Hero - responsive */}
            <div className="Hero w-full max-w-[1400px] min-h-[350px] border border-gray-700 mt-6 sm:mt-10 flex flex-col lg:flex-row justify-between items-center gap-8 p-6 sm:p-8 md:p-10 rounded-lg">
                <div className="Info text-center lg:text-left order-2 lg:order-1">
                    <h1 className='text-[#C0C0C0] text-sm sm:text-base mb-6 sm:mb-8 md:mb-12'>FULL STACK DEVELOPER</h1>
                    <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-3'>I'm Ranveer</h1>
                    <p className='text-[#C0C0C0] text-sm sm:text-base md:text-lg'>I am a full stack developer</p>

                    {/* Mobile-only button */}
                    <button className="mt-6 lg:hidden bg-[#F25134] text-white px-6 py-2 rounded-full hover:opacity-90 transition">
                        Hire Me
                    </button>
                </div>

                <div className="Profile text-center order-1 lg:order-2">
                    <p className='text-[#C0C0C0] text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8'>AVAILABLE FOR JOB</p>
                    <div className="relative">
                        <img
                            src={Profile}
                            alt="Ranveer's profile"
                            className='border border-amber-50 rounded-full h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px] lg:h-[200px] lg:w-[200px] object-cover mx-auto'
                        />
                        {/* Desktop-only button */}
                        <button className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#F25134] text-white px-6 py-2 rounded-full hover:opacity-90 transition whitespace-nowrap">
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;