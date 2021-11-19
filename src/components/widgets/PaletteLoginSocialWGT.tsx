import { Provider } from '@supabase/supabase-js'
import { FaFacebook, FaGithub, FaGoogle, FaSignOutAlt } from 'react-icons/fa'
import { supabaseClient } from '@/services/supabase'
import { ButtonSocial, ContainerPaletteLoginSocial, IconsSocialLogin, Text } from '../../styles/pages/LogInSTL'

const PaletteLoginSocialWGT = () => {
  async function login(social: Provider) {
    const { error } = await supabaseClient.auth.signIn(
      {
        // provider can be 'github', 'google' or 'facebook'
        provider: social
      },
      {
        redirectTo: `https://jazbewor.com/support`
      }
    )

    if (error) throw error
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
        <ButtonSocial onClick={() => login(`github`)} aria-label="GitHub">
          <FaGithub />
        </ButtonSocial>

        <ButtonSocial onClick={() => login(`facebook`)} aria-label="Facebook">
          <FaFacebook />
        </ButtonSocial>

        <ButtonSocial onClick={() => login(`google`)} aria-label="Google">
          <FaGoogle />
        </ButtonSocial>
      </IconsSocialLogin>
      <ButtonSocial onClick={() => logout()} aria-label="Sair">
        <FaSignOutAlt />
      </ButtonSocial>
    </ContainerPaletteLoginSocial>
  )
}

export default PaletteLoginSocialWGT
