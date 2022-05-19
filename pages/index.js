import Landing from "/components/landing.jsx";
import Dashboard from "/components/dashboard.jsx";

import { useState } from "react";

export default function Home() {
  const [isSignedIn, setSignedIn] = useState(false);

  function signInAndOut() {
    setSignedIn(!isSignedIn);
  }

  const data = {"name":"John", "name":"Julie", "name":"Hoover", "name":"Club", "name":"Megan", "name":"Lily"}

  return (
    <main>
      {
        isSignedIn ?
        <Dashboard content="This is the dashboard" />
        : <Landing content="This is the Landing" />
      }
      <button onClick={signInAndOut}>
        {isSignedIn ? "Sign Out" : "Sign In"}
      </button>
    </main>
  );
}
