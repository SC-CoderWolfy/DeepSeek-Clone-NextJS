import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Image from 'next/image';

const PromptBox = ({ isLoading, setIsLoading }) => {

    const [prompt, setPrompt] = useState("");
    return (

        <form className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>

            <textarea onChange={(e) => setPrompt(e.target.value)} className='outline-none w-full resize-none overflow-hidden break-words bg-transparent' value={prompt} rows={2} placeholder='Message DeepSeek' required />


            <div className='flex items-center justify-between text-sm'>

                <div className='flex items-center gap-2'>

                    <p className='flex items-center gap-2 text-xs border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>

                        <Image src={assets.deepthink_icon} className='h-5' alt='' />
                        Deep Think R1
                    </p>
                    <p className='flex items-center gap-2 text-xs border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>

                        <Image src={assets.search_icon} className='h-5' alt='' />
                        Search
                    </p>
                </div>
                <div className='flex items-center gap-2'>

                    <Image src={assets.pin_icon} className='w-4 cursor-pointer' alt='' />

                    <button className={`${prompt ? "bg-primary" : "bg-[#71717a"} rounded-full p-2 cursor-pointer`}>

                        <Image className='w-4 aspect-square' src={prompt ? assets.arrow_icon : assets.arrow_icon_dull} alt='' />
                    </button>
                </div>
            </div>


        </form >
    )
}

export default PromptBox