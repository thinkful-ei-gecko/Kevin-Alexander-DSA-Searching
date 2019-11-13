## 1. How many searches?
`3, 5, 6, 8, 11, 12, 14, 15, 17, 18`
### a. Find 8
- `3, 5, 6, 8`
- `6, 8`
- `8`

### b. Find 16
- `12, 14, 15, 17, 18`
- `17, 18`
- not found

## 2. Adding a React UI

## 3. Find a book
- Assume library is sorted in ascending order
- Perform binary search with Dewey Decimal part 1, part 2, and the title (in that order)
```javascript
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
```