// import { Link } from "react-router-dom";

import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 flex flex-col mt-20">
            <div className="mx-auto max-w-6xl flex justify-between gap-45 px-4 py-10">
                <div className="flex flex-col">
                    <Link to="/" className="text-3xl outfit-200 text-gray-900">
                        MiniShop
                    </Link>
                    <p className="outfit-200 mt-3 max-w-70">
                        Наша цель - обеспечить вас актуальными товарами которые доедут в любую точку мира.
                    </p>
                    <div className="flex items-center gap-2 mt-4">

                        <a href="https://www.youtube.com/@NikCevich" target="_blank" className="yt-anim">
                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5359 2.34184C21.4107 1.88881 21.1655 1.47575 20.825 1.14401C20.4844 0.812264 20.0603 0.573472 19.5953 0.451531C17.8825 1.36847e-07 11 0 11 0C11 0 4.11751 1.36847e-07 2.40475 0.451531C1.93966 0.573472 1.51561 0.812264 1.17504 1.14401C0.83447 1.47575 0.589324 1.88881 0.464138 2.34184C0.144326 4.04332 -0.0108694 5.77027 0.000591168 7.5C-0.0108694 9.22973 0.144326 10.9567 0.464138 12.6582C0.589324 13.1112 0.83447 13.5243 1.17504 13.856C1.51561 14.1877 1.93966 14.4265 2.40475 14.5485C4.11751 15 11 15 11 15C11 15 17.8825 15 19.5953 14.5485C20.0603 14.4265 20.4844 14.1877 20.825 13.856C21.1655 13.5243 21.4107 13.1112 21.5359 12.6582C21.8557 10.9567 22.0109 9.22973 21.9994 7.5C22.0109 5.77027 21.8557 4.04332 21.5359 2.34184V2.34184ZM8.80012 10.7143V4.28572L14.512 7.5L8.80012 10.7143Z" fill="gray"/>
                            </svg>
                        </a>

                        <a href="https://t.me/Nik_Cevich" target="_blank" className="tg-anim">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid" fill="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier"> <g> <path d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z" className="tg-anim-path1" fill="gray"> </path> <path d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308" fill="#FFFFFF"> </path> <path d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475" className="tg-anim-path2" fill="gray"> </path> <path d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624" className="tg-anim-path3" fill="gray"> </path> </g> </g>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="outfit-300 text-2xl">Навигация</h3>
                    <Link to="/" className="outfit-200">Каталог</Link>
                    <Link to="/" className="outfit-200">Контакты</Link>
                </div>
                <div className="flex flex-col items-end gap-3 max-w-75">
                    <h3 className="outfit-300 text-2xl">Свяжитесь с нами</h3>
                    <p className="outfit-200 flex flex-col items-end">
                        У вас возникли вопросы или пожелания?
                        <a href="mailto:nikcevichoff@gmail.com" className="underline">nikcevichoff@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="border-t border-gray-200">
                <div className="mx-auto max-w-6xl flex items-center justify-center px-4 py-6">
                    <p className="outfit-200 text-gray-700">
                        © Copyright 2026 ShopLite NikitaCevich.
                    </p>
                </div>
            </div>
        </footer>
    )
}