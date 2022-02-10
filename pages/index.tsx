import type { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
const Home: NextPage = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Image src={session.user?.image} alt="profile picture of you" layout='fill'/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Home
