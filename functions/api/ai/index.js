export async function onRequest({ request }) {
  const { model, messages } = await request.json();
  return new Response(JSON.stringify({ error: 'Missing model or messages' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
}
