import classes from './aboutUs.module.css';
import React from "react";

class AboutUs extends React.Component {


    render() {
        return (
            <>
                <ul className={classes.nameAge}>
                    <li>name: {this.props.user.name}</li>
                    <li>age: {this.props.user.age}</li>
                </ul>
            </>
        );
    };
}

export default AboutUs;