import { supabaseClient } from '@/../services/supabase'
import { AuthContext } from '@/contexts/AuthContext'
import useTableOrForm from '@/hooks/useTableOrForm'
import { GetServerSideProps } from 'next'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { Container } from '../styles/pages/SupportSTL'

const Support = props => {
  const { user } = useContext(AuthContext)
  const { tableVisible, exibirForm, exibirTable } = useTableOrForm()
  const [newSupport, setNewSupport] = useState('')
  const [supports, setSupports] = useState(props.supports)

  useEffect(() => {
    supabaseClient
      .from('supports')
      .on('INSERT', response => {
        // console.log(response)
        setSupports(state => [...state, response.new])
      })
      .subscribe()
  }, [])

  async function sendNewSupport(event: FormEvent) {
    event.preventDefault()

    if (!newSupport.trim()) {
      return
    }

    const { error } = await supabaseClient.from('supports').insert({
      content: newSupport
    })

    if (error) {
      console.log(error)
      return
    }

    setNewSupport('')
  }

  return (
    <Container>
      <form onSubmit={sendNewSupport}>
        {tableVisible ? (
          <div>
            <button onClick={exibirForm}>Criar</button>
            <table>
              <tr>
                <th>Content</th>
              </tr>
              {supports.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.content}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        ) : (
          <div>
            <div>
              <span>Nome</span>
              <input type="text" placeholder="Nome" />
            </div>
            <div>
              <span>Status</span>
              <input type="text" placeholder="Status" />
            </div>
            <div>
              <span>Content</span>
              <textarea
                placeholder="Write new post..."
                onChange={e => setNewSupport(e.target.value)}
                value={newSupport}
              />
            </div>
            <div>
              <button type="submit" onClick={exibirForm}>
                Salvar
              </button>
              <button onClick={exibirTable}>Voltar</button>
            </div>
          </div>
        )}
      </form>
    </Container>
  )
}

// SSR (Server-Side-Rendering)
export const getServerSideProps: GetServerSideProps = async ctx => {
  const { user } = await supabaseClient.auth.api.getUserByCookie(ctx.req)

  if (!user) {
    return {
      redirect: {
        destination: '/log-in',
        permanent: false
      }
    }
  }

  const response = await supabaseClient.from('supports').select('*').order('created_at', { ascending: true })

  console.log('Response', response)

  return {
    props: {
      supports: response.body
    }
  }
}
export default Support
