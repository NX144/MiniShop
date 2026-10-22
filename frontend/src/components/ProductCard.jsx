import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    const {id, thumbnail, title, price} = props.product;

    return (
        <Link to={"/product/" + id}>
            <div className=" bg-white rounded-lg overflow-hidden h-full flex flex-col hover:shadow-md transition">
                <img src={thumbnail} alt={title} className="w-full aspect-square object-cover " />
                <div className="p-3 flex flex-col gap-1 flex-1">
                    <p className="text-sm md:text-xl outfit-200 text-center line-clamp-2" >{title}</p>
                    <p className="text-xl outfit-200 text-center text-purple-700" >{price}$</p>
                </div>
            </div>
        </Link>
    )
}