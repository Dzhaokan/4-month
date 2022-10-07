import React from "react";
import Components from "../components/Components";

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {works: []}
    };

    getToDoList = () => {
      this.setState({works: ['Work1', "Work2", "Work3"]})
        console.log(this.state)
    };

    render() {
        return(
            <>
                <button onClick={this.getToDoList}>click</button>
                <Components works={this.state.works}/>
            </>
        );
    };
}

export default PortfolioPage;