const str =
  'bg-accent-100 text-accent-800 dark:bg-accent-200 dark:text-accent-800 group-hover:bg-accent-200 dark:group-hover:bg-accent-300';

export function splitClasses(str: string) {
  return str.split(' ');
}
console.log(splitClasses(str));
