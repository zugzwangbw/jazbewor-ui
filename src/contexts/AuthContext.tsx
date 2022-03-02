import { supabaseClient } from '@/services/supabase'
import { Session, User } from '@supabase/supabase-js'
import { createContext, useEffect, useState } from 'react'

type AuthContextType = {
  user?: User
  session?: Session
  authenticated?: string
}

export const AuthContext = createContext({} as AuthContextType)

const AuthProvider = props => {
  const { children } = props

  const [user, setUser] = useState<User>()
  const [session, setSession] = useState<Session>()
  const [authenticated, setAuthenticated] = useState(`not-authenticated`)

  async function checkUser() {
    const userCheck = await supabaseClient.auth.user()
    if (userCheck) {
      setAuthenticated(`authenticated`)
    }
  }

  async function handleAuthChange(event, sit): Promise<void> {
    await fetch(`/api/auth`, {
      method: `POST`,
      headers: new Headers({ 'Content-Type': `application/json` }),
      credentials: `same-origin`,
      body: JSON.stringify({ event, session: sit })
    })
  }

  useEffect(() => {
    const currentSession = supabaseClient.auth.session()

    if (currentSession) {
      setSession(currentSession)
      setUser(currentSession.user)
    }

    const { data } = supabaseClient.auth.onAuthStateChange((event, sit) => {
      setSession(sit)
      setUser(sit?.user)
      handleAuthChange(event, sit)
      event === `SIGNED_IN` ? setAuthenticated(`authenticated`) : setAuthenticated(`not-authenticated`)
    })

    checkUser()
    return () => {
      data.unsubscribe()
    }
  }, [])

  return <AuthContext.Provider value={{ user, session, authenticated }}>{children}</AuthContext.Provider>
}

export default AuthProvider
