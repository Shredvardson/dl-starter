import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    ok: true,
    appName: env.NEXT_PUBLIC_APP_NAME,
    hasSupabase: Boolean(env.SUPABASE_URL && env.SUPABASE_ANON_KEY),
  });
}