import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useCartStore from "../store/cartStore.js";
import paydone from "../assets/paydone.png";

export default function CheckoutPage() {

    const items = useCartStore(state => state.items);
    const clearCart = useCartStore(state => state.clearCart);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isValid, setIsValid] = useState(true);

    if(items.length === 0 && submitted !== true) {
        return <Navigate to="/cart" replace />;
    }


    const submitCheckout = (e) => {
        e.preventDefault();
        // Отправка данных и тп и в случае успеха в будущем вывод того что ниже

        if(!name || !email || !phone || !address) {
            setIsValid(false);
            return;
        }

        setSubmitted(true);
        clearCart();
    }

    let totalSum = items.reduce((acc, item) => {
        return acc + (Number(item.price) * item.quantity);
    }, 0);


    return (
        submitted ?
            <>

                <div className="flex items-center justify-center gap-20">
                    <h1 className="outfit-200 text-6xl text-center text-green-500 max-w-75">Заказ оформлен!</h1>
                    <img src={paydone} alt="not-found" className="w-75" />
                </div>

                <Link to="/" className="text-gray-500 hover:text-gray-900 outfit-300 text-2xl block mt-12 text-center">⬅️ На главную</Link>
            </>
            :
        <div>
            <h1 className="outfit-200 text-6xl text-center">Оформление заказа</h1>
            <form onSubmit={submitCheckout} method="POST" className="mt-20 flex flex-col">
                <h2 className="outfit-200 text-3xl mb-7">Детали заказа</h2>
                <input
                    onChange={(e) => {
                        setName(e.target.value)
                        setIsValid(true);
                    }}
                    placeholder="Ваше имя"
                    name="name"
                    minLength="2"
                    value={name}
                    className="max-w-175 px-6 py-4 border border-gray-300 rounded-lg outfit-200 text-lg mb-5"
                    type="text"/>
                <input
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setIsValid(true);
                    }}
                    placeholder="Адрес эл.почты"
                    name="email"
                    type="email"
                    value={email}
                    minLength="6"
                    className="max-w-175 px-6 py-4 border border-gray-300 rounded-lg outfit-200 text-lg mb-5"
                    />
                <input
                    onChange={(e) => {
                        setPhone(e.target.value)
                        setIsValid(true);
                    }}
                    placeholder="Номер телефона"
                    name="phone"
                    minLength="10"
                    value={phone}
                    className="max-w-175 px-6 py-4 border border-gray-300 rounded-lg outfit-200 text-lg mb-5"
                    type="text"/>
                <input
                    onChange={(e) => {
                        setAddress(e.target.value)
                        setIsValid(true);
                    }}
                    placeholder="Адрес, улица, дом, кв"
                    name="address"
                    value={address}
                    minLength="8"
                    className="max-w-175 px-6 py-4 border border-gray-300 rounded-lg outfit-200 text-lg mb-5"
                    type="text"/>

                {isValid ? null : <p className="text-xl text-red-600">Не все поля заполнены!</p>}
                <div className="flex flex-col mt-20">
                    <h2 className="outfit-200 text-3xl mb-7">Сумма корзины</h2>
                    <div className="grid grid-cols-[minmax(150px,500px)_minmax(200px,1fr)] border-b border-t border-gray-200 py-5">
                        <p className="outfit-200 text-xl">Всего</p>
                        <p className="outfit-200 text-xl text-purple-700">
                            ${totalSum}
                        </p>
                    </div>
                </div>
                <div className="mt-9">
                    <button type="submit" className="text-white bg-purple-700 rounded-xl py-4 px-10 hover:bg-purple-600">Оформить заказ</button>
                </div>
            </form>
        </div>
    )
}