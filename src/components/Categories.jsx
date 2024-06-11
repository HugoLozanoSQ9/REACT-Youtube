export default function Categories() {

    const categories = ["All", "Music", "Gaming", "Code", "Programming", "Life Style", "Sports"]

    return (
        <div id="categories-list">
            {
                categories.map((item) => {
                    return (
                        <span className="category" key={`category-${item}`} >
                            {item}
                        </span>
                    )
                })
            }
            

        </div>
    )
}

