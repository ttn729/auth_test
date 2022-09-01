import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useUser } from '@auth0/nextjs-auth0/dist/frontend'
import { isLocalURL } from 'next/dist/shared/lib/router/router';

export default function Home() {
  const { user, error, isLoading } = useUser();
  console.log(user);

  if (isLoading) return <div>...loading</div>

  if (error) return <div>{error.message}</div>
  if (user) {
    return (
      <>
        <h1>Hi {user.name}!</h1>
        <a href="/api/auth/logout">Logout</a>
      </>
    )
  }
  return (
    <a href="/api/auth/login">Login</a>
  )

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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
