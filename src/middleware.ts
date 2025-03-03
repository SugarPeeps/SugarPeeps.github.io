import { NextRequest, NextResponse } from "next/server";

const allowedDomains = [
	'https://embedsocial.com',
	'https://squareup.com',
	'https://square.site',
	'https://app.squareup.com',
	'https://book.squareup.com',
];

const buildCSPHeader = (nonce: string) => {
	const cspHeader = `
		default-src 'self';
		script-src 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval';
		script-src-elem 'self' 'unsafe-inline' ${allowedDomains.join(' ')};
		frame-src 'self' ${allowedDomains.join(' ')};
		style-src 'self' 'nonce-${nonce}';
		style-src-attr 'self' 'unsafe-inline';
		style-src-elem 'self' 'unsafe-inline';
		img-src 'self' blob: data:;
		font-src 'self';
		object-src 'none';
		base-uri 'self';
		form-action 'self';
		frame-ancestors 'none';
		upgrade-insecure-requests;
	`;
	return cspHeader
		.replace(/\s{2,}/g, ' ')
		.trim();
}

export function middleware(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
		const cspHeader = buildCSPHeader(nonce);

		// clone request headers and add the nonce and CSP so they can be used downstream
		const requestHeaders = new Headers(request.headers);
		requestHeaders.set('x-nonce', nonce);
		requestHeaders.set('Content-Security-Policy-Report-Only', cspHeader);

		// add CSP header to the response for the browser
		const response = NextResponse.next({
			request: {
				headers: requestHeaders,
			},
		});
		response.headers.set('Content-Security-Policy-Report-Only', cspHeader);

		// add CORs headers for square widget
		response.headers.set('Access-Control-Allow-Credentials', 'true');
		response.headers.set('Access-Control-Allow-Origin', 'https://squareup.com');
		response.headers.set('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT,OPTIONS');
		response.headers.set(
			'Access-Control-Allow-Headers',
			'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
		);

		return response;
}
