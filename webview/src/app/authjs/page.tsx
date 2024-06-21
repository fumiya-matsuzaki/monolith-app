'use client'

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthjsPage() {

  const session = useSession()

  if (session.status === 'loading') {
    return <p>loading...</p>
  }

  return (
      <div>
        {session.status === 'authenticated' ?
          <div>
            <p>EMAIL: {session.data.user?.email}</p>
            <p>NAME: {session.data.user?.name}</p>
            <button onClick={() => signOut()}>サインアウト</button>
          </div>
          :
          <button onClick={() => signIn()}>サインイン</button>
          }
      </div>
  );
}


