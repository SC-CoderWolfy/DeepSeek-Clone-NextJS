import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton } from '@clerk/nextjs'
import { useAppContext } from '../Context/AppContext'
import ChatLabel from './ChatLabel'
import { useSearchParams } from 'next/navigation'

const Sidebar = ({ expandSidebar, setExpandSidebar }) => {


    const { openSignIn } = useClerk();

    const { user } = useAppContext();

    const [openMenu, setOpenMenu] = useState({ id: 0, open: false })
    return (
        <div className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${expandSidebar ? 'p-4 w-64' : 'md:w-20 w-0 max-md:overflow-hidden'}`}>

            <div>

                <div className={`flex ${expandSidebar ? "flex-row gap-10" : "flex-col items-center gap-8"}`}>

                    <Image className={expandSidebar ? 'w-36' : 'w-10'} src={expandSidebar ? assets.logo_text : assets.logo_icon} alt='' />

                    <div className='group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer' onClick={() => expandSidebar ? setExpandSidebar(false) : setExpandSidebar(true)}>

                        <Image src={assets.menu_icon} alt='' className='md:hidden' />
                        <Image src={expandSidebar ? assets.sidebar_close_icon : assets.sidebar_icon} alt='' className='hidden md:block w-7' />

                        <div className={`absolute w-max ${expandSidebar ? "left-1/2 -translate-x-1/2 top-12" : "-top-12 left-0"} opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none`}>
                            {expandSidebar ? "Close Sidebar" : "Open Sidebar"}

                            <div className={`w-3 h-3 absolute bg-black rotate-45 ${expandSidebar ? "left-1/2 -top-1.5 -translate-x-1/2" : "left-4 -bottom-1.5"}`}></div>

                        </div>



                    </div>
                </div>

                <button className={`mt-8 flex items-center justify-center cursor-pointer ${expandSidebar ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max" : "group relative h-9 w-9 mx-auto hover:bg-gray-500/30 rounded-lg"}`}>


                    <Image className={`${expandSidebar ? "w-6" : "w-7"}`} src={expandSidebar ? assets.chat_icon : assets.chat_icon_dull} alt='' />

                    <div className='absolute w-max -top-12 -right-12 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none'>
                        New Chat

                        <div className='w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5'></div>

                    </div>

                    {expandSidebar && <p className='text-white font-medium'>New Chat</p>}
                </button>


                <div className={`mt-8 text-white/25 text-sm ${expandSidebar ? "block" : "hidden"}`}>

                    <p className='my-1'> Recent Chats</p>


                    <ChatLabel openMenu={openMenu} setOpenMenu={setOpenMenu} />

                </div>
            </div>

            <div >


                <div className={`flex items-center cursor-pointer group relative ${expandSidebar ? "gap-1 text-white/80 text-sm p-2.5 border border-primary rounded-lg hover:bg-white/10 cursor-pointer" : "h-10 w-10 mx-auto hover:bg-gray-500/30 rounded-lg"}`}>


                    <Image className={`${expandSidebar ? "w-5" : "w-6.5 mx-auto"}`} src={expandSidebar ? assets.phone_icon : assets.phone_icon_dull} alt='' />


                    <div className={`absolute -top-60 pb-8 ${!expandSidebar && "-right-40"} opacity-0 group-hover:opacity-100 hidden group-hover:block transition`}>
                        <div className='relative w-max bg-black text-white text-sm p-3 rounded-lg shadow-lg'>

                            <Image src={assets.qrcode} alt='' className='w-44' />

                            <p>Scan To Get Deepseek App</p>

                            <div className={`w-3 h-3 absolute bg-black rotate-45 ${expandSidebar ? "right-1/2" : "left-4"} -bottom-1.5`}></div>

                        </div>

                    </div>




                    {expandSidebar && <><span>Get App</span> <Image src={assets.new_icon} alt='' /></>}
                </div>

                <div className={`flex items-center ${expandSidebar ? "hover:bg-white/10 rounded-lg" : "justify-center w-full"} gap-3 text-white/60 text-sm p-2 mt-2 cursor-pointer`} onClick={user ? null : openSignIn}>

                    {user ? <UserButton /> : <Image src={assets.profile_icon} alt='' className='w-7' />}



                    {expandSidebar && <span>My Profile</span>}
                </div>


            </div>

        </div>
    )
}

export default Sidebar