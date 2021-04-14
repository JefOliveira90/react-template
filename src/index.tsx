import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <StrictMode>
      <App/>
    </StrictMode>,
    document.getElementById('app')
  )
})