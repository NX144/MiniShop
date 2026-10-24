import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import useCartStore from "../store/cartStore";

export default function Header() {

    const getCountProducts = useCartStore(state => state.items);

    let quantityProducts = getCountProducts.reduce((sum, item) => sum + item.quantity, 0);

    const [searchInput, setSearchInput] = useState("");

    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();

        const query = searchInput.trim();

        if(!query) return;

        navigate(`/?q=${encodeURIComponent(query)}`);
        setSearchInput("");
    }


    return (
        <header className="bg-white border-b border-gray-200">
            <div className="mx-auto max-w-6xl grid md:grid-cols-[330px_1fr_230px] grid-cols-[minmax(220px,1fr)] md:gap-y-0 gap-y-5 px-4 py-4">
                <div className="flex items-center gap-3 row-start-1 sm:justify-start justify-end row-end-2 sm:flex-row flex-row-reverse">
                    <Link to="/" className="text-4xl outfit-200 text-gray-900">
                        MiniShop
                    </Link>

                    <Link to="/"
                          className="w-max h-12 outfit-200 text-white hover:bg-purple-500 bg-purple-700 sm:rounded-2xl rounded-xl sm:px-7 px-4 flex items-center justify-center gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
                             width="19" height="19" x="0" y="0" viewBox="0 0 32 32"
                              xmlSpace="preserve" className=""><g><path d="M12 0H3C1.346 0 0 1.346 0 3v9c0 1.654 1.346 3 3 3h9c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3M29 0h-9c-1.654 0-3 1.346-3 3v9c0 1.654 1.346 3 3 3h9c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3M29 17h-9c-1.654 0-3 1.346-3 3v9c0 1.654 1.346 3 3 3h9c1.654 0 3-1.346 3-3v-9c0-1.654-1.346-3-3-3M12 17H3c-1.654 0-3 1.346-3 3v9c0 1.654 1.346 3 3 3h9c1.654 0 3-1.346 3-3v-9c0-1.654-1.346-3-3-3" fill="#fff" opacity="1" data-original="#000000" className=""></path></g></svg>
                        <span className="sm:block hidden">Каталог</span>
                    </Link>
                </div>
                <form onSubmit={handleSearch} className="relative flex items-center gap-6 text-sm md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 row-start-2 row-end-2 col-start-1 col-end-3">
                    <input
                        onChange={(e) => setSearchInput(e.target.value)}
                        value={searchInput}
                        type="text"
                        name="search"
                        placeholder="Поиск..."
                        minLength="2"
                        required
                        className="border border-gray-300 w-full px-4 py-4 rounded-xl"
                    />
                    <button type="submit"
                            className="w-10.5 h-10.5 bg-purple-600 hover:bg-purple-700 transition-all rounded-xl absolute right-0 top-[50%] -translate-x-2 translate-y-[-50%] flex items-center justify-center cursor-pointer">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2_2045)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.625 2.0625C7.7632 2.0625 6.90984 2.23224 6.11364 2.56204C5.31744 2.89184 4.594 3.37523 3.98461 3.98461C3.37523 4.594 2.89184 5.31744 2.56204 6.11364C2.23224 6.90984 2.0625 7.7632 2.0625 8.625C2.0625 9.4868 2.23224 10.3402 2.56204 11.1364C2.89184 11.9326 3.37523 12.656 3.98461 13.2654C4.594 13.8748 5.31744 14.3582 6.11364 14.688C6.90984 15.0178 7.7632 15.1875 8.625 15.1875C10.3655 15.1875 12.0347 14.4961 13.2654 13.2654C14.4961 12.0347 15.1875 10.3655 15.1875 8.625C15.1875 6.88452 14.4961 5.21532 13.2654 3.98461C12.0347 2.7539 10.3655 2.0625 8.625 2.0625ZM0.9375 8.625C0.9375 4.38 4.38 0.9375 8.625 0.9375C12.87 0.9375 16.3125 4.38 16.3125 8.625C16.3125 10.545 15.6083 12.3015 14.4443 13.6485L16.8975 16.1025C16.9528 16.154 16.9971 16.2161 17.0278 16.2851C17.0586 16.3541 17.0751 16.4286 17.0764 16.5041C17.0778 16.5796 17.0639 16.6547 17.0356 16.7247C17.0073 16.7947 16.9652 16.8584 16.9118 16.9118C16.8584 16.9652 16.7947 17.0073 16.7247 17.0356C16.6547 17.0639 16.5796 17.0778 16.5041 17.0764C16.4286 17.0751 16.3541 17.0586 16.2851 17.0278C16.2161 16.9971 16.154 16.9528 16.1025 16.8975L13.6485 14.4443C12.2537 15.6518 10.4699 16.3152 8.625 16.3125C4.38 16.3125 0.9375 12.87 0.9375 8.625Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2_2045">
                                    <rect width="18" height="18" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </form>

                <div className="flex justify-end items-center gap-3 row-start-1 row-end-2">
                       <Link to="/"  className="link-header flex flex-col items-center justify-center pt-3text-gray-700 hover:text-gray-900 relative">
                           <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none">
                               <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#292D32"/>
                               <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="#292D32"/>
                           </svg>
                           <p className="outfit-200 text-sm">Войти</p>
                       </Link>
                        <Link to="/cart" className="link-header flex flex-col items-center justify-center pt-3text-gray-700 hover:text-gray-900 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
                                 width="23" height="23" x="0" y="0" viewBox="0 0 480 480"
                                 xmlSpace="preserve" className=""><g><path d="M472 172.016h-68.72l-133.6-133.68a8.033 8.033 0 1 0-11.36 11.36l122.4 122.32H99.28l122.4-122.32a8.033 8.033 0 1 0-11.36-11.36l-133.6 133.68H8a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h17.2L56 437.296a8 8 0 0 0 8 6.72h352a8 8 0 0 0 8-6.72l30.8-185.28H472a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8m-62.8 256H70.8l-29.36-176h397.12zm54.8-192H16v-48h448z" fill="#000000" opacity="1" data-original="#000000" className=""></path><path
                                d="M256 268.016h-32a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-128a8 8 0 0 0-8-8m-8 128h-16v-112h16zM176 268.016h-32a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-128a8 8 0 0 0-8-8m-8 128h-16v-112h16zM336 268.016h-32a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-128a8 8 0 0 0-8-8m-8 128h-16v-112h16zM80 196.016a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8M400 196.016a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8"
                                fill="#000000" opacity="1" data-original="#000000" className=""></path></g></svg>
                            <span className="absolute -top-1 right-0.5 rounded-[100%] bg-purple-700 w-4.25 h-4.25 flex items-center justify-center text-white text-[13px] outfit-200">
                            {quantityProducts}
                            </span>
                            <p className="outfit-200 text-sm">Корзина</p>
                        </Link>
                </div>
            </div>
        </header>
    )
}