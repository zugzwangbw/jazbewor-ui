import { NextApiRequest, NextApiResponse } from 'next'
import { supabaseClient } from '@/services/supabase'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handle(req: NextApiRequest, res: NextApiResponse) {
  return supabaseClient.auth.api.setAuthCookie(req, res)
}
