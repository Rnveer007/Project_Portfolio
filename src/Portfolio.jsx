import React from 'react'

function Portfolio() {
    return (
        <>
            <div className="bg-[#161616] min-h-screen pt-10 flex flex-col items-center">
                {/* Headers */}
                <header className='Header flex h-[50px] items-center max-w-[1400px] w-full'>
                    <div className='text-[#F25134] text-2xl mr-4'>Ranveer</div>

                    <div className='border-1 border-gray-700 bg-[#1B1B1B] w-full rounded-3xl px-20 py-4'>
                        <ul className='flex justify-between'>
                            <li className='text-[#F25134] cursor-pointer'>ABOUT</li>
                            <li className='text-white cursor-pointer'>PORTFOLIO</li>
                            <li className='text-white cursor-pointer'>CONTACT</li>
                        </ul>
                    </div>
                </header>

                <div className="Hero w-full max-w-[1400px] h-[500px] border-1 border-gray-700 mt-10 px-4">
                    <div className="Isnfo">
                        <h1>FUll STACK DEVLOPER</h1>
                        <h1>I'm Ranveer</h1>
                        <p>i Am a full stack developer</p>
                    </div>

                    <div className="Profile">
                        <span>AVAILBALE FOR JOB</span>
                        <img src="" alt="Ranveer's profile" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Portfolio