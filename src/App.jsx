import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="template">
        <h1>React Project Template</h1>
        <h2>Let's start create your <span>Application</span></h2>
        <div>
          <a style={{ height: '160px', width: '160px' }} href="https://es.react.dev/">
            <svg height={130} viewBox="-11.5 -10.23174 23 20.46348">
              <circle cx="0" cy="0" r="2.05" />
              <g stroke-width="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          </a>
          <a href="https://vitejs.dev/">
            <img style={{ height: '160px', width: '160px' }} src="https://vitejs.dev/logo-with-shadow.png" alt="vite Logo" />
          </a>
        </div>

        <div className="button">
          <button onClick={() => setCount((v) => v + 1)}>Count: <span>{count}</span></button>
        </div>
        <footer className="footer">
          <p>Made by <a href="https://github.com/Lifo123">Lifo</a> - {new Date().getFullYear()}
          </p>
          <span>
            <a href="https://Lifo123.github.io/Portfolio/">About</a>
            <a href="https://github.com/Lifo123/Vite-React-Template">Repository</a>
          </span>
        </footer>
      </main >
    </>
  )
}

export default App
