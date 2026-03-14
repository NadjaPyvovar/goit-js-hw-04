function slugify(title) {
  return title.toLowerCase().trim().split(/\s+/).join('-');
}

console.log(slugify('Arrays for beginners'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

// Adding functionality: deleting any redundant symbols (i.e., comma, period, etc.), replacing multiple spaces with "-", and trimming spaces at the beginning and end:

// function slugify(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/\s+/g, '-')
//     .replace(/-+/g, '-');
// }
