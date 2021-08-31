import { supabaseClient } from '@/../services/supabase'
import { AuthContext } from '@/contexts/AuthContext'
import { Provider } from '@supabase/supabase-js'
import { useContext } from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { ButtonSocial, ContainerPaletteLoginSocial, IconsSocialLogin, Text } from '../../styles/pages/LogInSTL'

const PaletteLoginSocialWGT = () => {
  const { user } = useContext(AuthContext)

  async function login(social: Provider) {
    const { error } = await supabaseClient.auth.signIn(
      {
        // provider can be 'github', 'google' or 'facebook'
        provider: social
      },
      {
        redirectTo: 'https://jazbewor.com/support'
      }
    )

    error ? console.log('Error --> ', error) : console.log('User --> ', user)
  }

  async function logout() {
    await supabaseClient.auth.signOut()
  }

  return (
    <ContainerPaletteLoginSocial>
      <div>
        <b>or</b>
      </div>
      <Text>Sign in with your social media account</Text>
      {/* <!-- Social login buttons --> */}
      <IconsSocialLogin>
        <ButtonSocial onClick={() => login('github')} aria-label="GitHub">
          <FaGithub />
        </ButtonSocial>

        <ButtonSocial onClick={() => login('facebook')} aria-label="Facebook">
          <FaFacebook />
        </ButtonSocial>

        <ButtonSocial onClick={() => login('google')} aria-label="Google">
          <FaGoogle />
        </ButtonSocial>

        {/* <button onClick={login}>Login github</button> */}
      </IconsSocialLogin>
      <button onClick={logout}>Logout github</button>
    </ContainerPaletteLoginSocial>
  )
}

export default PaletteLoginSocialWGT
