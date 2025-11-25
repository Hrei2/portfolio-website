import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if maintenance mode is enabled via environment variable
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  
  // Allow access to the maintenance page itself
  if (request.nextUrl.pathname === '/maintenance') {
    return NextResponse.next();
  }
  
  // Allow access to static files and API routes
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // If maintenance mode is on, redirect all pages to maintenance page
  if (isMaintenanceMode) {
    return NextResponse.rewrite(new URL('/maintenance', request.url));
  }
  
  return NextResponse.next();
}

// Configure which routes the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
