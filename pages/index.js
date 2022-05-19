import Landing from '/components/landing.jsx'
import Dashboard from '/components/dashboard.jsx'

import { useState } from 'react'

function Home() {
  const [isSignedIn, setSignedIn] = useState(false)

  function signInAndOut() {
    setSignedIn(!isSignedIn)
  }

  const data = {"name":"John", "name":"Julie", "name":"Hoover", "name":"Club", "name":"Megan", "name":"Lily"}

  return (
    <main>
        {
          isSignedIn
          ? <Dashboard content="Currently in Dashboard" />
          : <Landing content = "Currently in Landing "/>
        }
        <button onClick={signInAndOut}>
          {
            isSignedIn
            ? "Sign Out"
            : "Sign In"
          }
        </button>
    </main>
  )
}

export default Home;