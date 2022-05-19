import Landing from '/components/landing.jsx'
import Dashboard from '/components/dashboard.jsx'

import { useState } from 'react'

export default function Home() {
  const [isSignedIn, setSignedIn] = useState(false)

  function signInAndOut() {
    setSignedIn(!isSignedIn)
  }

  return (
    <main>
        {
          isSignedIn
          ? <Dashboard></Dashboard>
          : <Landing></Landing>
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
