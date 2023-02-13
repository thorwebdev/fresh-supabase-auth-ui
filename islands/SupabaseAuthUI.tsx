import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";

interface SupabaseAuthUIProps {
  supabaseUrl: string;
  supabaseKey: string;
}

export default function SupabaseAuthUI(props: SupabaseAuthUIProps) {
  const supabaseClient = createClient(props.supabaseUrl, props.supabaseKey);
  return (
    <div>
      <Auth supabaseClient={supabaseClient} />
    </div>
  );
}
