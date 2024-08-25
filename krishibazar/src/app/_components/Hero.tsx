import React from 'react'
import Image from 'next/image'
import img from './assets/ADAS-7-1.jpg'
import logo from './assets/image 2.png'

function Hero() {
  return (
    <div>
        <div>
            <Image
            src={img}
            alt="img"
            placeholder='blur'
            className='h-screen absolute saturate-125'
            layout="fit"
            quality={75}
            objectFit="cover"
            objectPosition="center"
            style={{backgroundImage:'linear-gradient(rgba(8,8,37,0.85),rgba(0,15,80,0.675))'}}
            />
            <div className="mx-auto z-0 absolute flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                        <div className='flex items-center justify-center mx-[15px]'>
                            <Image src={logo} alt='logo' width={60} height={60}/>
                            <h1 className='text-3xl font-extrabold text-gray-800 font-verdana' >KrishiBazar</h1>
                        </div>

                        <div className="flex flex-1 items-center justify-center text-center md:justify-between">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 mx-10 ">
                                    <li>
                                        <a className="text-black text-l font-bold transition hover:text-slate-300" href="/"> HOME </a>
                                    </li>

                                    <li>
                                        <a className="text-black text-l font-bold transition hover:text-slate-300" href="#"> WORKING </a>
                                    </li>

                                    <li>
                                        <a className="text-black text-l font-bold transition hover:text-slate-300" href="#"> BUY/SELL </a>
                                    </li>

                                    <li>
                                        <a className="text-black text-l font-bold transition hover:text-slate-300" href="#"> CONTRACT </a>
                                    </li>
                                    <li className='ml-10'>
                                        <a className="text-black text-l font-bold transition hover:text-slate-300" href="#"> NEWS </a>
                                    </li>

                                    <li>
                                        <a className="text-black text-l font-bold transition hover:text-slate-300" href="#"> CHARTS </a>
                                    </li>

                                    <li>
                                        <a className="text-black text-l font-bold transition hover:text-slate-300" href="#"> CHATROOM </a>
                                    </li>
                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="block rounded-md bg-teal-600 px-5 py-2.5 text-l font-medium text-white transition hover:bg-teal-700"
                                        href="#"
                                    >
                                        Login
                                    </a>

                                    <a
                                        className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-l font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                                        href="#"
                                    >
                                        Register
                                    </a>
                                </div>

                                <button
                                    className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                                >
                                    <span className="sr-only">Toggle menu</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
            </div>
            <div className='flex flex-col justify-center place-items-center absolute top-[60%] left-[23%]'>
                <h1 className='uppercase font-black inline-block align-text-bottom text-9xl text-white backdrop-opacity-7 drop-shadow-[4px_7px_var(--tw-shadow-color)] shadow-gray-500'>contract</h1>
                <h1 className='uppercase font-black -translate-y-5 inline-block align-text-top text-8xl text-white drop-shadow-[5px_6px_var(--tw-shadow-color)] shadow-gray-600'>farming</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero