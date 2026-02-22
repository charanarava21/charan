// Initialize the Supabase client
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-public-key';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Helper function to check if a user is logged in on page load
async function checkUserSession() {
    const { data: { session } } = await _supabase.auth.getSession();
    return session;
}