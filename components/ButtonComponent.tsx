'use client';

export default function ButtonComponent({ loadData }: { loadData: ()=>void }) {
  return (
    <div className="text-center mb-8 mt-4">
      <button
        onClick={loadData}
        className="text-lg text-blue-600 font-medium px-3 py-1.5 rounded-md 
           transition-all duration-500 
           hover:bg-blue-200 hover:text-blue-900 hover:text-xl"

      >
        ↻ Load New Random Sample
      </button>
    </div>
  );
}
