// -----------------------------------------------------

{/* <div class="LoginForm">
    <h1> Login </h1>
    <div>
        <input type="text" placeholder="EnterEmailAddress" />
        <input type="text" placeholder="EnterPassword" />
        <div>
            <button class="btn">Sign In</button>
            <button class="btn">Sign Out</button>
        </div>

    </div>
</div> 
*/}
const Parent = React.createElement('div',{className:'LoginForm'},
[
React.createElement('h1',{},"Login"),
React.createElement('div',{},[
    React.createElement('input',{type:"text", placeholder:"EnterEmailAddress"}),
    React.createElement('input',{type:"text", placeholder:"EnterPassword"}),
    React.createElement('div',{},[
        React.createElement('button',{className:'btn'},"Sign In"), 
        React.createElement('button',{className:'btn'},"Sign Out"),
    ])
])
]
)

ReactDOM.createRoot(document.getElementById("root")).render(Parent)

// --------------------------------------------------------------------------



