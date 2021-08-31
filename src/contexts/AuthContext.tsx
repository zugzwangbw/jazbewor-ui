import { User, Session } from '@supabase/supabase-js'
import { createContext, useEffect, useState } from 'react'
import { supabaseClient } from '../../services/supabase'

type AuthContextType = {
  user?: User
  session?: Session
}

export const AuthContext = createContext({} as AuthContextType)

const AuthProvider = props => {
  const [user, setUser] = useState<User>()
  const [session, setSession] = useState<Session>()
  const [authenticated, setAuthenticated] = useState('not-authenticated')

  useEffect(() => {
    const currentSession = supabaseClient.auth.session()

    if (currentSession) {
      setSession(currentSession)
      setUser(currentSession.user)
    }

    const { data } = supabaseClient.auth.onAuthStateChange((event, newSession) => {
      setSession(newSession)
      setUser(newSession?.user)
      handleAuthChange({ event, session: newSession })
      console.log('Evento -> ', event)
      event === 'SIGNED_IN' ? setAuthenticated('authenticated') : setAuthenticated('not-authenticated')
    })

    return () => {
      data.unsubscribe()
    }
  }, [])

  async function checkUser() {
    const user = await supabaseClient.auth.user()
    if (user) {
      setAuthenticated('authenticated')
    }
  }

  async function handleAuthChange({ event, session }) {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session })
    })
  }

  return <AuthContext.Provider value={{ user, session }}>{props.children}</AuthContext.Provider>
}

export default AuthProvider
