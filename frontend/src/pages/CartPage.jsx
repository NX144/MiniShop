import useCartStore from "../store/cartStore.js";
import cartRemoveBtn from "../assets/cartRemoveBtn.png"
import {Link} from "react-router-dom";
import emptycart from "../assets/emptycart.png";

export default function CartPage() {

    const getItems = useCartStore(state => state.items);
    const removeItem = useCartStore(state => state.removeItem);
    const updateQuantity = useCartStore(state => state.updateQuantity);
    const clearCart = useCartStore(state => state.clearCart);

    if(getItems.length === 0) {
        return (
            <>
                <div className="flex sm:flex-row flex-col items-center justify-center md:gap-10 gap-0">
                    <h1 className="outfit-200 lg:text-6xl sm:text-4xl text-3xl text-center mb-8 lg:max-w-75 md:max-w-50 sm:max-w-45">В корзине ничего нет 🤷‍♂️️</h1>
                    <img src={emptycart} alt="not-found" className="md:w-100 sm:w-80 w-60" />
                </div>
                <Link to="/" className="text-gray-500 hover:text-gray-900 outfit-300  md:text-2xl text-lg block md:mt-12 mt-5 text-center">⬅️ За покупками</Link>

            </>
        )
    }

    let totalSum = getItems.reduce((acc, item) => {
        return acc + (Number(item.price) * item.quantity);
    }, 0);

    return (
        <>
            <div>
                <h1 className="outfit-200 lg:text-6xl sm:text-4xl text-3xl text-center">Корзина</h1>
            </div>
            <div className="mx-auto max-w-6xl grid lg:grid-cols-[minmax(250px,410px)_300px_minmax(300px,1fr)_minmax(78px,1fr)] sm:grid-cols-[minmax(200px,1fr)_160px_minmax(60px,115px)_minmax(48px,70px)] grid-cols-[minmax(150px,1fr)_140px_minmax(48px,60px)] px-4 py-4 md:mt-20 mt-12">
                <p className="outfit-200 lg:text-[22px] text-base">Товар</p>
                <p className="outfit-200 lg:text-[22px] text-base">Количество</p>
                <p className="outfit-200 lg:text-[22px] sm:block hidden text-base">Стоимость</p>
            </div>
            <div className="flex flex-col gap-5">
                {getItems.map(item => (
                    <div key={item.id} className="mx-full max-w-6xl grid lg:grid-cols-[minmax(250px,410px)_300px_minmax(300px,1fr)_minmax(78px,1fr)] sm:grid-cols-[minmax(200px,1fr)_160px_minmax(60px,115px)_minmax(48px,70px)] grid-cols-[minmax(150px,1fr)_140px_minmax(48px,60px)] px-4 py-5 lg:mt-6 sm:mt-3 mt-2 border-b-2 border-gray-200 items-center">
                        <div className="grid lg:gap-6 gap-1 lg:grid-cols-[150px_minmax(100px,260px)] sm:grid-cols-[115px_minmax(100px,150px)] grid-cols-[150px] items-center">
                            <img src={item.thumbnail} alt={item.title} className="sm:w-full w-24"/>
                            <p className="outfit-300">
                                {item.title}
                                <span style={{"color" : "purple", "display" : "block"}}>{item.price}$</span>
                            </p>
                        </div>
                        <div className="flex gap-1.5 ">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}  className="border border-gray-300 rounded-xl lg:px-4 px-3 lg:py-2 py-1 cursor-pointer">-</button>
                            <div className="border border-gray-300 lg:px-10 px-4 py-2 rounded-xl w-max cursor-default">{item.quantity}</div>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="border border-gray-300 rounded-xl lg:px-4 px-3 lg:py-2 py-1 cursor-pointer">+</button>
                        </div>
                        <h3 style={{"color" : "purple"}} className="lg:text-3xl sm:text-lg text-base outfit-300 sm:block hidden">{Number(item.price) * item.quantity}$</h3>
                        <button onClick={() => removeItem(item)} style={{"cursor": "pointer"}}>
                            <img src={cartRemoveBtn} title="Удалить" className="w-10 h-10 object-cover" alt=""/>
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-9 mt-14">
                <h2 className="outfit-200 md:text-3xl text-xl text-gray-600">Итоговая сумма к оплате</h2>
                <div className="grid grid-cols-[minmax(150px,500px)_minmax(200px,1fr)] border-b border-t border-gray-200 py-5">
                    <p className="outfit-200 md:text-xl text-lg">Всего</p>
                    <p className="outfit-200 md:text-xl text-lg text-purple-700">
                        ${totalSum}
                    </p>
                </div>
            </div>
            <div className="mt-9 flex sm:flex-row flex-col-reverse gap-4">
                <button onClick={() => clearCart()} className="text-purple-700 bg-white rounded-xl py-4 px-10 transition-all duration-150 hover:bg-purple-800 hover:text-white border border-purple-600 cursor-pointer text-center">
                    Очистить корзину
                </button>
                <Link to="/checkout" className="text-white bg-purple-700 rounded-xl py-4 px-10 hover:bg-purple-600 text-center">
                    К оформлению
                </Link>
            </div>
        </>
    )
}