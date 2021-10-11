import Item from "./item"

const divStyle = {
    "width": "25em",
    "overflowY": "scroll",
    "maxHeight": "350px",
    "paddingRight": "25px",
}

const itemContainerStyle = {
    "fontFamily": "Nunito Sans, sans-serif;",
    "fontSize": "1.4em"
}

export default function Group(props) {
    return (
        <div style={divStyle}>
            {props.projects.map((value) => {
                return <Item
                    key={value.name}
                    style={itemContainerStyle}
                    name={value.name}
                    image={value.image}
                    stack={value.stack}
                    url={value.url}
                />
            })}
            <style jsx>{`
                ::-webkit-scrollbar {
                    width: 3px;
                }

                ::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                ::-webkit-scrollbar-thumb {
                    background: #888;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}</style>
        </div>
    )
}