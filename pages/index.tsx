import type { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import { Container, Button, Text } from '@nextui-org/react';

const Home: NextPage = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <Container>
        <Text h1>Signed in as {session.user?.name}</Text>
        <Button onClick={() => signOut()}>Sign out</Button>
      </Container>
    )
  }
  return (
    <Container>
      <Text h1>Not signed in </Text>
      <Button onClick={() => signIn()}>Sign in</Button>
    </Container>
  )
}

export default Home
