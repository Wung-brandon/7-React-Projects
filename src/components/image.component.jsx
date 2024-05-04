


export default function ImageComponent(props){
        return(
            <div>
                <img src={props.src} width="300px" height="150px" alt={props.alt} />
            </div>
        )
}