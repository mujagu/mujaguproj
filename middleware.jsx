import AuthContext from '@context/AuthContext'
import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers'

const protectedRoutes = ['/dashboard']

// const publicRoutes = ['/login', '/signup', '/']


export default function middleware(req) {
  const cookies = req.cookies.get('authTokens');

  if (!cookies && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/auth/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}

export const config = {matcher: "/dashboard"};