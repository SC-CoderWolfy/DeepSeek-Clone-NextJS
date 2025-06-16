'use client'
import Image from "next/image";
import { useState } from "react";
import { assets } from "../../assets/assets";
import Sidebar from "../../Components/Sidebar";
import PromptBox from "../../Components/PromptBox";
import Message from "../../Components/Message";

export default function Home() {

  const [expandSidebar, setExpandSidebar] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


  return (
    <div>


      <div className="flex h-screen">

        <Sidebar expandSidebar={expandSidebar} setExpandSidebar={setExpandSidebar} />

        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">

          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">

            <Image onClick={() => (expandSidebar ? setExpandSidebar(false) : setExpandSidebar(true))} className="rotate-180" src={assets.menu_icon} alt="" />
            <Image className="opacity" src={assets.chat_icon} alt="" />
          </div>


          {messages.length === 0 ? (<>

            <div className="flex items-center gap-3">

              <Image src={assets.logo_icon} alt="" className="h-16 w-16" />
              <p className="text-2xl font-medium">Hi,I Am Deepseek</p>
            </div>
            <p className="text-sm mt-2">How Can I Help You Today?</p>
          </>) : (<div>

            <Message role='user' content='What is next js' />
          </div>)}


          {/* Prompt Box */}

          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />

          <p className="text-xs absolute bottom-1 text-gray-500">AI Generated. For Reference Only</p>
        </div>


      </div>
    </div>
  );
}
