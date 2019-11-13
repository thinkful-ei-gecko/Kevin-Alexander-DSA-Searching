const library = [
  "005.133 Mike Cowlishaw: The REXX Language",
  "005.133 Sams: Teach Yourself C++ In 21 Days",
  "005.133 Bjarne Stroustrup: The C++ Programming Language",
  "005.2762 David Flanagan: JavaScript: The Definitive Guide",
  "005.2762 Douglas Crockford: JavaScript: The Good Parts",
  "005.44684 Meinhard Schmidt: Windows Vista for Dummies",
  "220.52081 Zondervan: NIV Study Bible",
  "231.7652 Dr Russell Humphries: Starlight and Time",
  "623.82509051 Frederick Thomas Jane: Jane's Fighting Ships",
  "796.8092 Chuck Norris: The Official Chuck Norris Fact Book",
  ];

function findBook(library, dewey, title, start=0, end=library.length - 1) {
  let targets = dewey.split('.'); // 123.45678 -> [123, 45678]

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = library[index];
  let itemTargets = item.split(' ');
  let itemDewey = itemTargets.shift();
  let itemTitle = itemTargets.join(' ');

  if (itemDewey === dewey && itemTitle === title) {
    return index;
  }
  else if (Number(targets[0]) < Number(itemDewey.split('.')[0])) {
    return findBook(library, dewey, title, start, index - 1);
  }
  else if (Number(targets[0]) > Number(itemDewey.split('.')[0])) {
    return findBook(library, dewey, title, index + 1, end);
  }
  else {
    if (Number(targets[1]) < Number(itemDewey.split('.')[1])) {
      return findBook(library, dewey, title, start, index - 1);
    }
    else if (Number(targets[1]) > Number(itemDewey.split('.')[1])) {
      return findBook(library, dewey, title, index + 1, end);
    }
    else {
      if (itemTitle === title) {
        return index;
      }
      else {
          if (title < itemTitle) {
            return findBook(library, dewey, title, start, index - 1);
          }
          else if (title > itemTitle) {
            return findBook(library, dewey, title, index + 1, end);
          }
      }
    }
  }
}

// console.log(findBook(library, '005.2762', `Douglas Crockford: JavaScript: The Good Parts`));

