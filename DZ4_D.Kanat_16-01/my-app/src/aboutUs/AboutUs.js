import React from "react";
import Hey from "../components/Hey";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {text: true};
    };

    clickText = () => {
        this.setState({text: !this.state.text})
    };

    render() {
        return (
            <>
                <button onClick={this.clickText}>click</button>
                {this.state.text && <Hey/>}
            </>
        );
    };
}

export default AboutUs;