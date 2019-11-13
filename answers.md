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

## 4. Searching in a BST

```
           35
        /      \
       25      89
      /  \    /  \
    15   27  79   91
   /  \          /
  14  19        90
```
**In-Order:** 14, 15, 19, 25, 27, 35, 79, 89, 90, 91
**Pre-Order:** 35, 25, 15, 14, 19, 27, 89, 79, 91, 90
**Post-Order:** 14, 19, 15, 27, 25, 79, 90, 91, 89, 35

## 5. Implement different tree traversals
```javascript
  inOrder() {
    if (this.left) {
      this.left.inOrder();
    }
    console.log(this.key);
    if (this.right) {
      this.right.inOrder();
    }
  }
  preOrder() {
    console.log(this.key);
    if (this.left) {
      this.left.preOrder();
    }
    if (this.right) {
      this.right.preOrder();
    }
  }
  postOrder() {
    if (this.left) {
      this.left.postOrder();
    }
    if (this.right) {
      this.right.postOrder();
    }
    console.log(this.key);
  }
```

## 6. Find the next commanding officer
```javascript
function outputByRank(tree, rankOrder=[]) {
  const queue = new Queue();
  const person = tree; // tree is the first node
  queue.enqueue(person);
  while (queue.length) {
    const person = queue.dequeue();
    rankOrder.push(person.value);
    // console.log(person.value)
    if (person.left) {
      queue.enqueue(person.left);
    }

    if (person.right) {
      queue.enqueue(person.right);
    }
  }

  return rankOrder;
}
```

## 7 Max Profit
```
       128
        /
       97
         \
         121
         /  \
        98  123
       /  \
      97  105
```