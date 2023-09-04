import { cookies } from "next/headers";
import { Database } from "@alias/lib/database.types";
//import AccountForm from "./account-form";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // return <AccountForm session={session} />;
  return <>Account</>;
}
