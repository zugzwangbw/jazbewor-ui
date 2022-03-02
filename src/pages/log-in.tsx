import PaletteLoginSocial from '@/components/widgets/PaletteLoginSocialWGT'
import { supabaseClient } from '@/services/supabase'
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

function LogIn() {
  const [email, setEmail] = useState<string>(null)
  const [password, setPassword] = useState<string>(null)

  async function login() {
    const { error } = await supabaseClient.auth.signIn(
      {
        email,
        password
      },
      {
        redirectTo: `https://jazbewor.com/support`
      }
    )

    if (error) throw error
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
                login()
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
