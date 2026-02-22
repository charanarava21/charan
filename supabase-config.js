// 1. Setup your credentials (Find these in Supabase > Settings > API)
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-anon-public-key';

// 2. Initialize the Supabase Client
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 3. Optional: Export a helper to check if someone is logged in
async function getCurrentUser() {
    const { data: { user } } = await _supabase.auth.getUser();
    return user;
}
