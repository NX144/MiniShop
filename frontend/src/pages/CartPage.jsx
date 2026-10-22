import useCartStore from "../store/cartStore.js";
import cartRemoveBtn from "../assets/cartRemoveBtn.png"
import {Link} from "react-router-dom";

export default function CartPage() {

    const getItems = useCartStore(state => state.items);
    const removeItem = useCartStore(state => state.removeItem);
    const updateQuantity = useCartStore(state => state.updateQuantity);

    if(getItems.length === 0) {
        return (
            <>
                <h1 className="outfit-200 text-6xl text-center" style={{"color": "green"}}>В корзине пусто</h1>
                <Link to="/" className="text-gray-500 hover:text-gray-900 block mt-10">⬅️ Вернуться в каталог</Link>
            </>
        )
    }

    let totalSum = getItems.reduce((acc, item) => {
        return acc + (Number(item.price) * item.quantity);
    }, 0);

    return (
        <>
            <div>
                <h1 className="outfit-200 text-6xl text-center">Корзина</h1>
            </div>
            <div className="mx-auto max-w-6xl grid grid-cols-[minmax(250px,410px)_300px_minmax(200px,1fr)] px-4 py-4 mt-20">
                <p className="outfit-200 text-[22px]">Товар</p>
                <p className="outfit-200 text-[22px]">Количество</p>
                <p className="outfit-200 text-[22px]">Стоимость</p>
            </div>
            <div className="flex flex-col gap-5">
                {getItems.map(item => (
                    <div key={item.id} className="mx-auto max-w-6xl grid grid-cols-[minmax(250px,410px)_300px_minmax(300px,1fr)_minmax(78px,1fr)] px-4 py-5 mt-12px border-b-2 border-gray-200 items-center">
                        <div className="grid gap-6 grid-cols-[150px_minmax(100px,260px)] items-center">
                            <img src={item.thumbnail} alt={item.title}/>
                            <p className="outfit-300">
                                {item.title}
                                <span style={{"color" : "purple", "display" : "block"}}>{item.price}$</span>
                            </p>
                        </div>
                        <div className="flex gap-1.5 ">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}  className="border border-gray-300 rounded-xl px-4 py-2 cursor-pointer">-</button>
                            <div className="border border-gray-300 px-10 py-2 rounded-xl w-max cursor-default">{item.quantity}</div>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="border border-gray-300 rounded-xl px-4 py-2 cursor-pointer">+</button>
                        </div>
                        <h3 style={{"color" : "purple"}} className="text-3xl outfit-300">{Number(item.price) * item.quantity}$</h3>
                        <button onClick={() => removeItem(item)} style={{"cursor": "pointer"}}>
                            <img src={cartRemoveBtn} title="Удалить" className="w-10 h-10 object-cover" alt=""/>
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-9 mt-14">
                <h2 className="outfit-200 text-3xl text-gray-600">Итоговая сумма к оплате</h2>
                <div className="grid grid-cols-[minmax(150px,500px)_minmax(200px,1fr)] border-b border-t border-gray-200 py-5">
                    <p className="outfit-200 text-xl">Всего</p>
                    <p className="outfit-200 text-xl tebg-purple-700">
                        ${totalSum}
                    </p>
                </div>
            </div>
            <div className="mt-9">
                <Link to="/checkout" className="text-white bg-purple-700 rounded-xl py-4 px-10 hover:bg-purple-600">К оформлению</Link>
            </div>
        </>
    )
}