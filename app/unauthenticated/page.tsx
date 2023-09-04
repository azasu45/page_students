import { createServerComponentClient } from "@supabase/auth-helpers-nextjs/src";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function Unauthenticated() {
  const superbase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await superbase.auth.getSession();

  if (session) redirect("/");

  return <div>Unauthenticated</div>;
}

export default Unauthenticated;
