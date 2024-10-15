import { redirect } from 'next/navigation';
export const dynamic = 'force-dynamic';
export default function Page({params,searchParams}){
  const date = new Date().toISOString().substring(0,10);
  redirect(`/reports/day/${date}`);
}