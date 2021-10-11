import Item from "./item"

const divStyle = {
    "width": "25em",
    "overflowY": "scroll",
    "maxHeight": "350px",
    "paddingRight": "25px",
    // "border": "1px solid",
    "borderRadius": "5px",
    "color": "white",
    "background": "#17202a"
}

const itemContainerStyle = {
    // "fontFamily": "Nunito Sans, sans-serif;",
    "fontSize": "1.4em",
    "fontFamily": "'Bungee Hairline', cursive;"
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
                    width: 5px;
                }

                ::-webkit-scrollbar-track {
                    background: #17202a;
                }

                ::-webkit-scrollbar-thumb {
                    background: #efce71;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}</style>
        </div>
    )
}