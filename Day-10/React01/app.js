//  const heading = React.createElement("h1",{id:"heading"},"Hello! React Learners(React)");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const div = React.createElement("div",{id: "outer"},
    [React.createElement("div",{id: "inner"},
        [React.createElement("p",{id:"para"},"I am paragraph"),
        React.createElement("h1",{id: "heading"}, "I'm heading"),
        React.createElement("span",{id:"message"},"Hello react learners")
        ]
    )]
)