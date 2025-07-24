import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    window.location.href = process.env.APP_ENV === 'live' ? 'https://ccms.workmagic.io' : 'https://ccms-preview.workmagic.io'
  }, [])
  
  return (
      <div>
        Redirecting to CCMS...
      </div>
  )
}

export default App
