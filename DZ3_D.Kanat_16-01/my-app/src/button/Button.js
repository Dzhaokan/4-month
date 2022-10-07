import React from "react";

class Button extends React.Component {
    Hello() {
        alert("Hello world");
    }
    render() {
        return (
            <div>
                <button onClick={this.Hello}>ClickMe</button>
            </div>
        );
    }
}

export default Button;