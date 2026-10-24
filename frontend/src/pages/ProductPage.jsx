import {useState, useEffect, useRef} from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../api/getProductById.js";
import useCartStore from "../store/cartStore";
import SwiperCart from "../components/SwiperCart.jsx";

export default function ProductPage() {

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {id} = useParams();
    const [added, setAdded] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        const fetchGetProduct = async () => {
            try {
                const productDataById = await getProductById(id);

                setProduct(productDataById);

            } catch{
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchGetProduct();
    }, [id])

    useEffect(() => {
        return () => {
            if(timerRef.current) clearTimeout(timerRef.current);
        }
    }, [])

    const addItem = useCartStore((state) => state.addItem);

    const addToCart = () => {
        if(timerRef.current) clearTimeout(timerRef.current);
        addItem(product);
        setAdded(true);
        timerRef.current = setTimeout(() => {
            setAdded(false);
            timerRef.current = null;
        }, 2500)
    }

    if(loading) {
        return (
            <>
                <div className="my-7 flex gap-1">
                    <Link to="/" className="outfit-200" >Главная</Link>
                    <p className="outfit-200" >→</p>
                    <p className="outfit-200 h-5 w-30 bg-gray-300 animate-pulse"></p>
                </div>
                <div className="grid grid-cols-2 gap-10 bg-gray-100 w-full rounded-6xl animate-pulse">
                    <div className="w-75 h-75 bg-gray-300 rounded-4xl animate-pulse"></div>
                    <div>
                        <h1 className="outfit-200 text-6xl h-30 w-5/6 bg-gray-300 animate-pulse mb-3 rounded-2xl"></h1>
                        <p className="text-red-600 text-3xl py-4 h-7 w-20 bg-gray-300 animate-pulse mb-3"></p>
                        <p className="text-base pb-4 h-15 w-full bg-gray-300 animate-pulse rounded-2xl"></p>
                        <div className="grid grid-cols-2 gap-3 mt-5">
                            <Link to="/" className="cursor-pointer w-66 h-15 px-2 py-4 rounded-3xl flex content-center justify-center bg-gray-300 animate-pulse"></Link>
                            <button className={" cursor-pointer px-2 py-4 w-66 h-15 rounded-3xl text-white bg-gray-300 animate-pulse"}></button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    if(error) {
        return <p style={{"color": "red"}}>Ошибка</p>
    }

    if(!product) {
        return <p style={{"color": "red"}}>Товар не найден!</p>
    }


    return (
        <>
            <div className={(added ? "top-3" : "-top-37.5") + " w-67.5 px-3 py-4 bg-green-500 rounded-xl text-lg outfit-300 text-white flex items-center justify-center fixed left-1/2 -translate-x-1/2 transition-all duration-400 ease-in-out z-9999"} >Товар добавлен в корзину</div>

            <div className="my-7 flex gap-1">
                <Link to="/" className="outfit-200" >Главная</Link>
                <p className="outfit-200" >→</p>
                <p className="outfit-200" >{product.title}</p>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-25 sm:gap-12 gap-8">
                <SwiperCart images={product.images} />
                <div>
                    <h1 className="outfit-200 lg:text-5xl sm:text-4xl text-3xl">{product.title}</h1>
                    <p className="outfit-200 text-red-600 md:text-3xl sm:text-2xl text-xl py-4">${product.price}</p>
                    <p className="outfit-200 sm:text-base text-sm/[22px]  pb-4">{product.description}</p>
                    <div className="grid lg:grid-cols-2 grid-col-1 gap-3">
                        <Link to="/" className="lg:-order-1 order-1 cursor-pointer border border-y-gray-800  px-2 py-4 rounded-3xl flex content-center justify-center transition ease-in-out delay-75 hover:text-white hover:bg-gray-800 lg:w-full w-70">Назад в каталог</Link>
                        <button onClick={addToCart} className={(added ? "opacity-70 pointer-events-none" : "") + " cursor-pointer bg-purple-700 transition ease-in-out delay-75 hover:bg-purple-600 px-2 py-4 rounded-3xl text-white lg:w-full w-70 "}>Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </>
    )
}