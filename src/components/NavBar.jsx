import YouTube from "./YoutubeLogo"

export default function NavBar() {
    return (
        <nav id="navbar">
            <div id="logo">
                <YouTube heigth="1.8rem" width="3rem" />
                <span>YouTube</span>
            </div>

            <div id="search-container">
                <input type="text" placeholder="Search" />
            </div>
            <div id="user-icon">
                <img
                    src="https://api.dicebear.com/8.x/bottts/svg?seed=Hugo"
                    alt="Hugo" />

            </div>
        </nav>
    )

}


