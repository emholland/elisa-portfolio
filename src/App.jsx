import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-white text-gray-800 font-sans">
      {/* Content wrapper */}
      <main className="flex-grow px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <header className="text-center space-y-3">
            <h1 className="text-5xl font-extrabold text-purple-700 tracking-tight">
              Elisa Holland
            </h1>
            <p className="text-lg text-purple-400 font-medium">
              Software Engineer · Project Manager
            </p>
          </header>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-purple-300 py-6 border-t border-purple-100">
        © {new Date().getFullYear()} Elisa Holland. All rights reserved.
      </footer>
    </div>
  )
}

export default App
