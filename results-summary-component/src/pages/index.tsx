import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-pale-blue">
        <div className="flex w-[300px] rounded-3xl border bg-white">
          <aside className="flex w-1/2 flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue py-8 pt-5  text-center text-pale-blue">
            <h3>Your Result</h3>
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-0 bg-gradient-to-b from-violet-blue to-light-royal-blue">
              <span className="text-3xl font-bold text-white">76</span>
              <span className="text-gray-600">of 100</span>
            </div>
            <div className="text-xl font-bold text-white">Great</div>
            <div className="text-center text-sm text-pale-blue">
              You scored higher than 65% of the people who have taken these
              tests
            </div>
          </aside>
          <h3>SUMMARY</h3>
        </div>
      </main>
    </>
  );
}
