import React from "react";

function AboutUs(props){
    const text = {

        title: "hello",
        subtitle: "lorem lorem lorem"
      }

    return(
        <>
        <h1>{text.title}</h1>
        <p>{text.subtitle}</p>
        </>
    )
  }
  
  export default AboutUs