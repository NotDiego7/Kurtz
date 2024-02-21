// import './TestApp.css'

// function TestApp() {
//     return (
//         <div className="test-app">
//             <h1>Reactive</h1>
//             <h3>What is reactivity?</h3>
//             <ul>
//                 <li>It's composable.</li>
//                 <li>It's declarative.</li>
//                 <ul><strong>What the heck is declarative?</strong>
//                     <li>Rather than having to tell your machine how to do (step by step), we only have to tell it what to do?</li>
//                 </ul>
//             </ul>
//         </div>
//     )
// }

// export default TestApp



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */



/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */


// import React from 'react'
// import ReactDOM from 'react-dom'
// import '/public/logo512.png'

// function TestApp() {
//     return (
//         <div className="container">
//             <header>
//                 <img src='react-logo.png' alt='React logo.'></img>
//             </header>

//             <h1>Fun facts about React</h1>

//             <ul>
//                 <li>Powers thousands of enterprise apps, including mobile apps (React Native).</li>
//                 <li>Released in 2013.</li>
//                 <li>Created by Jordan Walke.</li>
//                 <li>Strong community.</li>
//                 <li>Maintained by Facebook.</li>
//             </ul>
//         </div>
//     )
// }

// const root = document.getElementById('root')
// ReactDOM.render(TestApp, root)

// export default TestApp



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */



/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

// import React from "react"
// import ReactDOM from "react-dom"

// function Page() {
//     return (
//         <div className="container">
//             <header>
//                 <nav>
//                     <img src="./react-logo.png" alt="React Logo" className="react-logo" style={{width: "20px"}}></img>
//                 </nav>
//             </header>

//             <h1>React - the people's framework.</h1>

//             <ol>
//             <li>It's a popular library, so I'll be 
//             able to fit in with the cool kids!</li>
//             <li>I'm more likely to get a job as a developer
//             if I know React</li>
//             </ol>

//             <footer>
//                 <small> © 2024 <code>Josue L.</code> development. All rights reserved.</small>
//             </footer>
//         </div>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */



import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function Main() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))