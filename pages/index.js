import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import { useUser } from '@auth0/nextjs-auth0'

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>...loading</div>

  if (error) return <div>{error.message}</div>
  if (user) {
    return (
      <>
        <h1>Hi {user.name}!</h1>
        <Link href="/api/auth/logout"><a>Logout</a></Link>
      </>
    )
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Link href="/api/auth/login"><a>Login</a></Link>

        <h1 className={styles.title}>
          Welcome to Spicy 
        </h1>


        <p className={styles.description}>
          Hello a Edric!
        </p>
      </main>
    </div>
  )
}
