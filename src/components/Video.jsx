//Para poder obtener los valores desde content debemos saber primero que nada cuales son, de ahí se procede a aplicarlos como props.propiedad
/*export default function Video (props){
    return (

        <article className="video-card">
            <img src={props.image} alt="" />
            <footer>
                <img src="" alt="" />
                <p>{props.title} </p>
                <p>{props.channel}</p>
            </footer>
        </article>

    )
}
*/
/*
export default function Video (props){
    const {image,title,channel} = props
    return (

        <article className="video-card">
            <img src={image} alt="" />
            <footer>
                <img src="" alt="" />
                <p>{title} </p>
                <p>{channel}</p>
            </footer>
        </article>

    )
}
*/
import clsx from "clsx"
export default function Video({ image, title, channel }) {

    { /*if(!channel){
        return(
            <article>
                <p>Incompleto</p>
            </article>
        )
    }*/}

    //const articleClassnames = "video-card" + (channel === "Marques Brownlee"? " special" : "");
    
   {/* let articleClassnames = ['video-card']
    if(channel== "Marques Brownlee"){
        articleClassnames.push("special")
    }
     */}
    return (

        <article className={clsx("flex flex-col gap-2",{"border border-red-500":channel == "Marques Brownlee"})}>
            <img src={image} alt="" class="w-full rounded-lg object-cover aspect-w-16 aspect-h-9"/>
            <footer class="grid grid-cols-[3rem,1fr] gap-2">
                {/* 
                {
                    channel && (<img //Si hay canal entonces --> crea laimagen, si no hay canal entonces no lo renderiza
                        src={`https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=${channel}`}
                        alt="avatar"
                    />)
                }
                {
                    !channel && (
                        <span> Uwu </span>
                    )
                }
                */}
                {   
                channel ? (<img //Si hay canal entonces --> crea laimagen, si no hay canal entonces no lo renderiza
                src={`https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=${channel}`}
                alt="avatar"
                class="col-start-1 col-end-2 w-8 h-8 rounded-full"
            />)  :(<span> Uwu </span>)              
                }
                <span class="video-card-title col-start-2 col-end-3" >{title} </span>
                <span class="video-card-title col-start-2 col-end-3" >{channel || "UNKNOWN"}</span>
            </footer>
        </article>

    )
}