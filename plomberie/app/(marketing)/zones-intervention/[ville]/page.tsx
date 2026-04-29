interface VillePageProps {
  params: {
    ville: string;
  };
}

export async function generateStaticParams() {
  return [
    { ville: 'paris' },
    { ville: 'lyon' },
    { ville: 'marseille' },
  ];
}

export default function VillePage({ params }: VillePageProps) {
  const { ville } = params;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Plomberie à {ville.charAt(0).toUpperCase() + ville.slice(1)}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Service de plomberie professionnel à {ville.charAt(0).toUpperCase() + ville.slice(1)}.
            Intervention rapide et devis gratuit.
          </p>
        </div>
      </main>
    </div>
  );
}