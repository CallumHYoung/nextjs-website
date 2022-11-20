export default function Project(props){
    return(
        <>
            <p>{props.name}</p>
            <img src={props.img}/>
        </>
    )
}