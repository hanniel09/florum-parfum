interface PerfumeDescriptionProps {
  title: string;
  description: string;
  notes?: string[];
}

export default function PerfumeDescription({
  title, 
  description, 
  notes 
}: PerfumeDescriptionProps) {
  return( 
  <section class="max-w-[1440px] w-full mx-auto px-6 lg:px-20 py-5 border-t border-gray-100">
    <div class="text-left mb-6">
      <h1 class="text-3xl font-semibold text-gray-800">{title}</h1>
      <p class="text-gray-600 mt-4 mb-4 text-pretty">{description}</p>
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