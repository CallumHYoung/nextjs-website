const containerStyle = {
    "width": "100%",
    "height": "100px"
}

const anchorStyle = {
    "display": "block",
    "display": "flex",
    "textDecoration": "none",
}

const imageStyle = {
    "width": "5vw",
    "height": "5vh",
    "minWidth": "70px",
    "minHeight": "70px",
    "marginRight": "10px",
    "objectFit": "contain"
}

const detailContainerStyle = {
    "display": "inline",
    "width": "100%",
    "height": "150px",
    "paddingLeft": "25px"
}

const spanStyle1 = {
    "display": "block",
    "textAlign": "center",
    "fontFamily": "'Bungee Hairline', cursive;",
    "fontSize": "1.1em",
    "verticalAlign": "top",
    "color": "#b2babb"
}

const spanStyle2 = {
    "display": "block",
    "textAlign": "center",
    "fontFamily": "'Aldrich', sans-serif;",
    "fontSize": "0.85em",
    "color": "#b2babb"
}

export default function Item(props) {
    return (
        <div style={containerStyle}>
            <a
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                style={anchorStyle}
            >
                <img style={imageStyle} src={props.image} />
                <div style={detailContainerStyle}>
                    <span style={spanStyle1}> <strong>{props.name}</strong></span>
                    <span style={spanStyle2}> {props.stack} </span>
                </div>
            </a>
        </div>
    )
}