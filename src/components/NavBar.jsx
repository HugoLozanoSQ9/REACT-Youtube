import YouTube from "./YoutubeLogo"

export default function NavBar() {
    return (
        <nav className="col-start-1 col-end-3 grid grid-cols-3">
            <div className="flex flex-row items-center gap-1 pl-4">
                <YouTube heigth="1.8rem" width="3rem" />
                <span>YouTube</span>
            </div>

            <div className="flex items-center justify-center" >
                <input class="w-full p-2 px-4 border border-[#282828] rounded-full bg-transparent" type="text" placeholder="Search" />
            </div>
            <div className="flex justify-end">
                <img
                    className="w-8 h-8 rounded-full"
                    src="https://api.dicebear.com/8.x/bottts/svg?seed=Hugo"
                    alt="Hugo" />

            </div>
        </nav>
    )

}


