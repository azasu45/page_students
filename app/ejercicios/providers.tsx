import SupabaseProvider from "../supabaseProvider";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

export default async function Providers(props: { children: React.ReactNode }) {
  const superbase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await superbase.auth.getSession();

  if (!session) redirect("/login");

  return (
    <SupabaseProvider session={session}>{props.children}</SupabaseProvider>
  );
}
