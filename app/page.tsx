
export default function Home() {
  return (
    <div className="flex min-h-fit items-center justify-center bg-zinc-200 font-sans dark:bg-black">
      <main className="flex min-h-fit w-full max-w-3xl flex-col items-center justify-between py-32 px-16 color-home dark:bg-black sm:items-start">
       <h1>Home</h1>
       <h2>Work in progress...</h2>
       <div  className="border-0 border-l-blue-300 rounded-2xl border-background">
       <img src={"home2.jpg"} alt="logo" className="w-fit rounded-full"/>
       </div>
      </main>
    </div>
  );
}
