import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })
const supabaseUrl = process.env.BACKEND_URL
const supabaseKey = process.env.BACKEND_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase