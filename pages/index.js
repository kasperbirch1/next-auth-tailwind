import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-col justify-center items-center">
        <h1>Hej</h1>
        <div className="">
          {session ? (
            <>
              <pre>{JSON.stringify(session, null, 2)}</pre>
              <button className="p-1 border" onClick={() => signOut()}>
                Signed in as {session.user.email} Sign out
              </button>
            </>
          ) : (
            <button className="p-1 border" onClick={() => signIn()}>
              signIn
            </button>
          )}
        </div>
      </main>
    </>
  );
}
