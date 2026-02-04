function Card({img, title, text}){
    return(
        <div>
            <img src={img} alt="place" className="h-48 w-96 object-cover object-center rounded-lg"></img>
            <h2>{title}</h2>
            <h3>{text}</h3>
        </div>
    )
}
export default Card