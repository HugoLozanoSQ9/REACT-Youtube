export default function Categories() {

    const categories = ["All", "Music", "Gaming", "Code", "Programming", "Life Style", "Sports"]

    return (
        <div className="flex flex-row gap-4">
            {
                categories.map((item) => {
                    return (
                        <span className="category p-2 px-4 rounded-lg bg-[#282828]" key={`category-${item}`} >
                            {item}
                        </span>
                    )
                })
            }
            

        </div>
    )
}

