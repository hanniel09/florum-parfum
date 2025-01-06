interface PerfumeDescriptionProps {
  title: string;
  paragraph1: string;
  paragraph2?: string;
  paragraph3?: string;
  notes?: string[];
}

export default function PerfumeDescription({
  title, 
  paragraph1,
  paragraph2,
  paragraph3,
  notes 
}: PerfumeDescriptionProps) {
  return( 
  <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 py-5 border-t border-gray-100">
    <div class="text-left mb-6">
      <h1 class="text-3xl font-semibold text-gray-800">{title}</h1>
      <div class="text-gray-600 mt-4 text-pretty space-y-3">
      <p>{paragraph1}</p>
        {paragraph2 && <p>{paragraph2}</p>}
        {paragraph3 && <p>{paragraph3}</p>}
      </div>
    </div>
    {notes && notes.length > 0 && (
      <div class="mt-6">
        <h2 class="text-xl font-semibold text-gray-700">Fragrance Notes:</h2>
        <ul class="list-disc list-inside mt-2 text-gray-600">
          {notes.map((note, index) => ( 
            <li key={index}>{note}</li>
          )) }
        </ul>
      </div>
    )}
  </section>
  );
}