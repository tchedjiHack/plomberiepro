export default function ZonesIntervention() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Zones d'Intervention
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Nous intervenons dans de nombreuses villes de la région.
          </p>
        </div>
        <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
          <li><a href="/zones-intervention/paris" className="text-blue-600 hover:underline">Paris</a></li>
          <li><a href="/zones-intervention/lyon" className="text-blue-600 hover:underline">Lyon</a></li>
          <li><a href="/zones-intervention/marseille" className="text-blue-600 hover:underline">Marseille</a></li>
        </ul>
      </main>
    </div>
  );
}