import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { Database } from "@alias/lib/database.types";

export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const requestUrl = new URL(request.url);

  const formData = await request.formData();
  const titulo = String(formData.get("titulo"));
  const codigo = String(formData.get("codigo"));
  const supabase = createRouteHandlerClient<Database>({ cookies });

  const ejercicioId = params.id ?? "noId";

  console.log(ejercicioId);

  const res = await supabase
    .from("ejercicios")
    .update({
      titulo,
      codigo,
    })
    .eq("id", ejercicioId);

  if (res.error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/ejercicios/${ejercicioId}?error=${res.error.message}`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    );
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/ejercicios/${ejercicioId}`,
    {
      status: 301,
    }
  );
}
