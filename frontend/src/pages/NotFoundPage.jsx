import { Link } from 'react-router-dom';
import page404image from "../assets/page404image.png";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-[44px] text-center mt-14 mb-8">Страница не найдена</h1>
            <img src={page404image} alt="not-found" className="w-155.5" />
            <Link to="/" className="hover:text-red-600 outfit-300 text-center text-[34px] mt-10">⬅️ Домой</Link>
        </div>
    )
}