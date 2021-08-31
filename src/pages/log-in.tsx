import { supabaseClient } from '@/../services/supabase'
import PaletteLoginSocial from '@/components/widgets/PaletteLoginSocialWGT'
import Link from 'next/link'
import { useState } from 'react'
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  HorizontalRule,
  LoginWith,
  Logo
} from '../styles/pages/LogInSTL'

const LogIn = ({ isLoading }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  async function login(email: string, password: string) {
    console.log(email, password)
    try {
      const { user, session, error } = await supabaseClient.auth.signIn(
        {
          email: email,
          password: password
        },
        {
          redirectTo: 'https://jazbewor.com/support'
        }
      )

      if (error) throw error
    } catch (error) {
      console.log('Errou', error)
    } finally {
      console.log(email, password)
    }
  }

  return (
    <Container>
      <FormWrap>
        <FormContent>
          <Form action="#">
            <Link href="/" passHref>
              <Logo>Jazbewor</Logo>
            </Link>
            <FormH1>Log in to your account</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" onChange={e => setEmail(e.target.value)} value={email} required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" onChange={p => setPassword(p.target.value)} value={password} required />
            <FormButton
              type="submit"
              onClick={e => {
                e.preventDefault()
                login(email, password)
              }}
            >
              Continue
            </FormButton>
            <LoginWith>Forgot password?</LoginWith>
          </Form>
          <HorizontalRule />
          <PaletteLoginSocial />
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default LogIn
