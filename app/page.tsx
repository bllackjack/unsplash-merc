import MainImageLoader from "@/components/main/MainImageLoader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl mb-2 text-slate-300">Unsplashhifyy Mercor</h1>
      <h4 className="text-slate-600 text-xs mb-8">- by Gurjappan</h4>
      <MainImageLoader />
    </main>
  );
}
