import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
// const ReactElement={
//   type: 'a',
//   props:{
//     href: 'https://google.com',
//     target:'_blank'
//   },
//   children:'click me to visit'
// }
//This would not execute due to syntax error

// const anotherElement = _(
//   <a href="https://google.com" target="_blank">Visit me </a>
// )

const anotherUser = "poornima"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <App/> 
// reactElement

)
