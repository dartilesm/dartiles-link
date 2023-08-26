import { NextResponse } from 'next/server';
import links from '@/src/data/links.json';

export async function GET () {
  return NextResponse.json(links, { status: 200 });
}
