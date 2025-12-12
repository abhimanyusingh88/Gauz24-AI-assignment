export function getSizeClass(count:number) {
  if (count >= 3) return 'col-span-full row-span-2 text-xl p-8';
  if (count === 2) return 'col-span-3 row-span-2 text-lg p-6';
  return 'col-span-2 row-span-1 text-base p-4';
};
// sizing ka issue hoga to check kar lena yha pe aake