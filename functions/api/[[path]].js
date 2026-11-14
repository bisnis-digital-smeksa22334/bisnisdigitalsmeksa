const BACKEND = 'https://smeksa-backend.rommelsan102.workers.dev';

export async function onRequest(context) {
  const incoming = new URL(context.request.url);
  const target = new URL(BACKEND + incoming.pathname + incoming.search);

  const headers = new Headers(context.request.headers);
  headers.delete('host');
  headers.delete('origin');

  const response = await fetch(target, {
    method: context.request.method,
    headers,
    body: ['GET', 'HEAD'].includes(context.request.method)
      ? undefined
      : context.request.body,
    redirect: 'manual'
  });

  const outputHeaders = new Headers(response.headers);
  outputHeaders.delete('access-control-allow-origin');
  outputHeaders.delete('access-control-allow-credentials');
  outputHeaders.set('cache-control', 'no-store');

  const cookie = outputHeaders.get('set-cookie');
  if (cookie) {
    outputHeaders.set(
      'set-cookie',
      cookie
        .replace(/;\s*Domain=[^;]*/i, '')
        .replace(/;\s*SameSite=None/i, '; SameSite=Lax')
    );
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: outputHeaders
  });
}
