export default function Menu() {

    //List rendering

    const menuItems = [
        { icon: "📋", text: "Home" },
        { icon: "📋", text: "Shorts" },
        { icon: "📋", text: "Subscriptions" },
        { icon: "📋", text: "Favs" },
    ]


    return (
        <aside  class="col-start-1 col-end-2 row-start-2 row-end-3 pr-4">
            {
                menuItems
                /*.filter((item) => item.text.startsWith("S"))*/
                .map((item) => {
                    return (
                        <div key={`menu-item-${item.text}`} class="menu-item p-4 rounded-lg flex flex-row gap-2 items-center hover:bg-[#282828]"> {/*La Key es super importante para que internamente el algoritmo de React sepa cual la llave de ese elemento*/}
                            <span>
                               {item.icon}
                            </span>
                            <span>
                                {item.text}
                            </span>
                        </div>
                    )
                })
            }
        </aside>
    )

}