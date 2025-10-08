import './App.css'
import { BackgroundRippleEffect } from './components/ui/background-ripple-effect'
import logo from './assets/owasp-logo.svg'
import { px } from 'motion'

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden bg-black">
      <BackgroundRippleEffect />
      <div className="mt-30 w-full">
        <img src={logo} alt="OWASP TCET" height={300} width={300} className='relative z-10 mx-auto'></img>
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-100 md:text-4xl lg:text-7xl dark:text-neutral-100 mt-15 mb-25">
          Welcome To OWASP TCET
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-200 dark:text-neutral-200">
          Welcome to OWASP TCET, your portal to a safer digital realm. As an OWASP chapter, we're dedicated to advancing security. Our mission: empower devs, security enthusiasts, and organizations with knowledge and tools to thwart digital threats. Explore resources, join our community, and embark on a cybersecurity journey. Together, we'll create a safer digital world for all. Join us in making this vision a reality.
        </p>
      </div>
    </div>)
}

export default App
