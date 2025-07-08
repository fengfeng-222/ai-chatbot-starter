export function onRequestGet(context) {
  return new Response(`User id is ${context.params.id}`);
}
