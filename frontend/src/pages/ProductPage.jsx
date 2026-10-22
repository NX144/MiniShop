import {useState, useEffect, useRef} from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../api/getProductById.js";
import useCartStore from "../store/cartStore";
import loadingSpinner from "../assets/spinner.gif";

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
        return <img src={loadingSpinner} alt="loading..."/>
    }

    if(error) {
        return <p style={{"color": "red"}}>Ошибка</p>
    }

    if(!product) {
        return <p style={{"color": "red"}}>Товар не найден!</p>
    }


    return (
        <>
            <div className={(added ? "top-3" : "-top-37.5") + " w-67.5 px-3 py-4 bg-green-500 rounded-xl text-lg outfit-300 text-white flex items-center justify-center fixed left-1/2 -translate-x-1/2 transition-all duration-400 ease-in-out"} >Товар добавлен в корзину</div>
            <div className="grid grid-cols-2 gap-10">
                <img src={product.thumbnail} alt=""/>
                <div>
                    <h1 className="outfit-200 text-6xl">{product.title}</h1>
                    <p className="text-red-600 text-3xl py-4">${product.price}</p>
                    <p className="text-base pb-4">{product.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                        <Link to="/" className="cursor-pointer border border-y-gray-800  px-2 py-4 rounded-3xl flex content-center justify-center">Назад в каталог</Link>
                        <button onClick={addToCart} className={(added ? "opacity-70 pointer-events-none" : "") + " cursor-pointer bg-gray-900 px-2 py-4 rounded-3xl text-white"}>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}