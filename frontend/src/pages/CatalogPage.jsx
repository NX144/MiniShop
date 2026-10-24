import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getProducts} from "../api/getProducts.js";
import {searchProducts} from "../api/searchProducts.js";
import ProductCard from "../components/ProductCard.jsx";
import Pagination from "../components/Pagination.jsx";
import {LIMIT} from "../config.js";

export default function CatalogPage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [urlParams, setUrlParams] = useSearchParams();
    const [total, setTotal] = useState(0);
    const sortBy = urlParams.get("sortBy");
    const order = urlParams.get("order");
    const selectValue = sortBy && order ? `${sortBy}-${order}` : "";

    const page = Number(urlParams.get("page")) || 1;
    const skip = ((page - 1) * LIMIT );
    let totalPages = Math.ceil(total / LIMIT);



    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                if(urlParams.get("q")) {
                    const data = await searchProducts(urlParams.get("q"), LIMIT, skip, urlParams.get("sortBy") || null, urlParams.get("order") || null);
                    setProducts(data.products);
                    setTotal(data.total);
                    setError(null)
                } else {
                    const data = await getProducts(LIMIT, skip, urlParams.get("sortBy") || null, urlParams.get("order") || null);
                    setProducts(data.products);
                    setTotal(data.total);
                    setError(null)
                }
            } catch (error) {
                setError(error.message);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [urlParams])




    const paginationBtn = (count) => {
        const newPage = page + Number(count);
        if(newPage < 1 || newPage > totalPages) return;
        const next = {page: newPage};
        if(sortBy) next.sortBy = sortBy;
        if(order) next.order = order;
        const q = urlParams.get("q");
        if(q) next.q = q;
        setUrlParams(next);
    }


    const changePage = (page) => {
        const next = {page: page};
        const q = urlParams.get("q");
        if(sortBy) next.sortBy = sortBy;
        if(order) next.order = order;
        if(q) next.q = q;
        setUrlParams(next);
    }

    const filterSort = (e) => {
        const next = {page: 1}
        const values = e.target.value.split("-");
        const q = urlParams.get("q");
        if(values.length > 1) {
            next.sortBy = values[0];
            next.order = values[1];
        }
        if(q) next.q = q;
        setUrlParams(next);
    }




    if(loading) {
        let limitSkeleton = [];
        for(let i = 1; i <= LIMIT; i++) {
            limitSkeleton.push(i);
        }
        return (
            <div>
                <h1 className="outfit-200 lg:text-6xl sm:text-4xl text-3xl mb-5">Каталог</h1>
                <p className="sm:text-xl text-base flex items-center gap-4">Нашлось: <span className="h-5 w-30 bg-gray-300 animate-pulse"></span></p>
                <div className="mt-10">
                    <p className="text-gray-600">Список товаров</p>
                </div>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-y-10 md:gap-x-5 gap-y-6 gap-x-4">
                    {limitSkeleton.map((_, i) => (
                        <div key={i} className="bg-gray-200 rounded-lg flex flex-col">
                            <div className="aspect-square bg-gray-300 animate-pulse"></div>
                            <div className="p-3 flex flex-col gap-1 flex-1">
                                <div className="h-4 w-full bg-gray-300 rounded animate-pulse" ></div>
                                <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse mx-auto" ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if(error){
        return <p style={{"color": "red"}}>Ошибка</p>
    }

    if(products.length === 0) {
        if(urlParams.get("q")) {
            return (
                <>
                    <h1 className="outfit-200 lg:text-6xl sm:text-4xl text-3xl mb-5">Каталог</h1>
                    <p className="sm:text-xl text-base">Ничего не найдено по запросу «{urlParams.get("q")}»</p>
                    <button
                        onClick={() => setUrlParams({page: 1})}
                        className="text-red-600 cursor-pointer mt-2"
                    >Сбросить фильтр</button>
                </>
            )
        } else {
            return (
                <>
                    <h1 className="outfit-200 lg:text-6xl sm:text-4xl text-3xl mb-5">Каталог</h1>
                    <p className="sm:text-xl text-base">Каталог пуст</p>
                </>
            )
        }
    }


    return (
        <div>
            <h1 className="outfit-200 lg:text-6xl sm:text-4xl text-3xl mb-5">Каталог</h1>
            <p className="sm:text-xl text-base">Нашлось: {total} товаров</p>
            {/* Filters */}
            <div className="flex justify-between mt-10">
                <p className="text-gray-600">Список товаров</p>
                <div className="select-wrapper">
                    <select
                        onChange={filterSort}
                        value={selectValue}
                        name="sort"
                        id="sort"
                        className="border outline-none outfit-300 focus:border-purple-600 px-3 py-2 rounded-lg custom-select"
                    >
                        <option value="">По умолчанию</option>
                        <option value="price-asc">Цена ↑</option>
                        <option value="price-desc">Цена ↓</option>
                        <option value="id-desc">Сначала новые</option>
                        <option value="id-asc">Сначала старые</option>
                    </select>
                </div>
            </div>

            {/* List Items */}

            <div className=" mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-y-10 md:gap-x-5 gap-y-6 gap-x-4">
                {products.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>

            {/* Pagination */}
            <Pagination page={page} totalPages={totalPages} changePage={changePage} paginationBtn={paginationBtn}  />
        </div>
    )
}