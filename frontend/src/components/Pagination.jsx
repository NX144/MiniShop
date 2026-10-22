export default function Pagination({page, totalPages, changePage, paginationBtn}) {

    const pages = [];

    if (totalPages <= 7) {
        for(let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        const left = Math.max(2, Number(page) - 2);
        const right = Math.min(totalPages - 1, Number(page) + 2);

        pages.push(1);

        if(left > 2) {
            pages.push("dots")
        }

        for (let i = left; i <= right; i++) {
            pages.push(i);
        }

        if(right < totalPages - 1) {
            pages.push("dots")
        }

        pages.push(totalPages);

    }

    return (
        <div className="flex justify-between items-center m-auto mt-8">
            <button onClick={() => paginationBtn("-1")} className={((page - 1) < 1 ? "opacity-50 pointer-events-none " : "") + " border border-purple-700 p-4 rounded-lg cursor-pointer"}>Назад</button>
            <ul className="list-none flex gap-2">
                {pages.map((item, i) => (
                    item === "dots" ? <span key={i}>...</span>
                        : (
                            <li onClick={() => changePage(item)} className={(page === item ? "bg-purple-800 text-white" : "bg-transparent") + " w-10 h-10 rounded-[100%] border border-gray-300 flex justify-center items-center cursor-pointer transition-all hover:bg-purple-600 hover:text-white"} key={i}>
                                {item}
                            </li>
                        )
                ))}
            </ul>
            <button onClick={() => paginationBtn("+1")} className={(page === totalPages ? "opacity-50 pointer-events-none " : "") + " border border-purple-700 p-4 rounded-lg cursor-pointer"}>Вперёд</button>
        </div>
    )
}