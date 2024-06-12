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
export default function Video({ image, title, channel }) {
    return (

        <article className="video-card">
            <img src={image} alt="" />
            <footer>
                <img
                    src={`https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=${channel}`}
                    alt="avatar" />
                
                <span className="video-card-title" >{title} </span>
                <span className="video-card-channel" >{channel}</span>
            </footer>
        </article>

    )
}