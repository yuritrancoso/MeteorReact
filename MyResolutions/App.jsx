import React from 'react';

class App extends React.Component {
    render() {
        return(
            <h1>hello world</h1>
        )
    }
}

if(Meteor.isClient) {
    Meteor.startup(function(){
        React.render(<App/>, document.getElementById("render-target"));//<THING/> whe render an html element, including images uses this brackets

    });
}