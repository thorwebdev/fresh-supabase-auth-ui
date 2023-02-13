import SupabaseAuthUI from "../islands/SupabaseAuthUI.tsx";

export default function HomePage() {
  return (
    <SupabaseAuthUI
      supabaseUrl={Deno.env.get("SUPABASE_URL")!}
      supabaseKey={Deno.env.get("SUPABASE_ANON_KEY")!}
    />
  );
}
