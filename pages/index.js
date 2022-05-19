import Landing from "/components/landing.jsx";
import Dashboard from "/components/dashboard.jsx";
import Names from "/components/names.jsx";

import { useState } from "react";

export default function Home() {
  const [isSignedIn, setSignedIn] = useState(false);

  function signInAndOut() {
    setSignedIn(!isSignedIn);
  }

  const data = ["John", "Julie", "Hoover", "Club", "Megan", "Lily"]
  const nameData = data.map((name) =>
      <Names name={name} />
    )

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
      {nameData}
    </main>
  );
}
