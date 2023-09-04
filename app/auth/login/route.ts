import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { Database } from "@alias/lib/database.types";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);

  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const supabase = createRouteHandlerClient<Database>({ cookies });

  const res = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (res.error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login?error=${res.error.message}`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    );
  }
  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  });
}
