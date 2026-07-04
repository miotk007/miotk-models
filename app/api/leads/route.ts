import { NextResponse } from "next/server";
import { validateBook, validateOpenCall, isEmpty } from "@/lib/validation";

/**
 * Lead capture endpoint for both forms. Validates server-side (never trust the
 * client) and, today, logs the submission. To persist, drop in a Supabase /
 * Sanity / email call where indicated — the request contract stays the same.
 *
 * POST /api/leads
 * body: { kind: "open-call" | "book", payload: {...} }
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const { kind, payload } = (body ?? {}) as { kind?: string; payload?: any };

  if (kind !== "open-call" && kind !== "book") {
    return NextResponse.json({ ok: false, error: "Unknown lead kind." }, { status: 400 });
  }

  const errors =
    kind === "open-call" ? validateOpenCall(payload) : validateBook(payload);

  if (!isEmpty(errors)) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // --- Persist here when a backend is connected -------------------------
  // await supabase.from("leads").insert({ kind, payload, created_at: new Date() });
  // await sendStudioNotification(kind, payload);
  // ---------------------------------------------------------------------
  console.info(`[lead:${kind}]`, payload);

  return NextResponse.json({ ok: true });
}
