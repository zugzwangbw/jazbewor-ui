import { supabaseClient } from '@/services/supabase'
import { Session, User } from '@supabase/supabase-js'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

interface AuthContextType {
  user?: User
  session?: Session
  authenticated?: string
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
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

  const valueContextProps = useMemo(
    () => ({
      user,
      session,
      authenticated
    }),
    [user, session, authenticated]
  )
  return <AuthContext.Provider value={valueContextProps}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}
