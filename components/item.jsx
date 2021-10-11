const containerStyle = {
    "width": "100%",
    "height": "75px"
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
    "objectFit": "contain",
}

const detailContainerStyle = {
    "display": "inline",
    "width": "100%",
    "height": "75px",
    "paddingLeft": "25px"
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
                    <span style={{ "display": "block", "textAlign": "center" }}> <strong>{props.name}</strong></span>
                    <span style={{ "display": "block", "textAlign": "center" }}> {props.stack} </span>
                </div>
            </a>
        </div>
    )
}