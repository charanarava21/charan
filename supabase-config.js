// 1. Setup your credentials (Find these in Supabase > Settings > API)
const supabaseUrl = 'https://ialgrfxmwalyyszgvlap.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhbGdyZnhtd2FseXlzemd2bGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MTU1NjIsImV4cCI6MjA4NzA5MTU2Mn0.m9TqFekT1qkw1XFqX_sb9OGew-2Wbk84kP6DD-gk8sI';

// 2. Initialize the Supabase Client
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 3. Optional: Export a helper to check if someone is logged in
async function getCurrentUser() {
    const { data: { user } } = await _supabase.auth.getUser();
    return user;
}

