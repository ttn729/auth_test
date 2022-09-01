import { UserProvider } from '@auth0/nextjs-auth0/dist/frontend'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
