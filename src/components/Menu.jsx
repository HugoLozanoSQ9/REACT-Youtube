export default function Menu() {

    //List rendering

    const menuItems = [
        { icon: "📋", text: "Home" },
        { icon: "📋", text: "Shorts" },
        { icon: "📋", text: "Subscriptions" },
        { icon: "📋", text: "Favs" },
    ]


    return (
        <aside id="menu">
            {
                menuItems
                /*.filter((item) => item.text.startsWith("S"))*/
                .map((item) => {
                    return (
                        <div key={`menu-item-${item.text}`} className="menu-item"> {/*La Key es super importante para que internamente el algoritmo de React sepa cual la llave de ese elemento*/}
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