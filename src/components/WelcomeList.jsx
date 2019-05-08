import React from 'react'

const WelcomeList = (props) => {
    return (
        props.welcomeList.map((element) => {
            return <p>{`My name is ${element.author}, ${element.content}`}</p>;
        })
    );
}

export default WelcomeList;