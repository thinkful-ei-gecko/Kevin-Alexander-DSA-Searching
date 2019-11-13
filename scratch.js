const BinarySearchTree = require('./BST');
const Queue = require('./Queue');

/*************************************************
 Q3
 **************************************************/
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
function findBook(library, dewey, title, start = 0, end = library.length) {
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
// console.log(findBook(library, '005.44684', `Meinhard Schmidt: Windows Vista for Dummies`));

/*************************************************
 Q5
 **************************************************/
const traversal = new BinarySearchTree();
const dataset = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
dataset.forEach(item => traversal.insert(item));
// console.log('inorder:');
// traversal.inOrder();
// console.log('preorder:');
// traversal.preOrder();
// console.log('postorder:');
// traversal.postOrder();

/*************************************************
 Q6
 **************************************************/
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

const USSEnterprise = new BinarySearchTree();
USSEnterprise.insert(100, 'Captain Picard');
USSEnterprise.insert(90, 'Commander Riker');
USSEnterprise.insert(110, 'Commander Data');
USSEnterprise.insert(80, 'Lt. Cmdr. Worf');
USSEnterprise.insert(70, 'Lieutenant RedShirt');
USSEnterprise.insert(95, 'Lt. Cmdr. LaForge');
USSEnterprise.insert(120, 'Lt. Cmdr. Crusher');
USSEnterprise.insert(115, 'Lieutenant Selar');
// USSEnterprise.display();
// console.log(outputByRank(USSEnterprise, []));

/*************************************************
 Q7
 **************************************************/
function getMaxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if(prices[i] < minPrice) {
      minPrice = prices[i];
    }

    let profit = prices[i] - minPrice;
    if(profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}
console.log(getMaxProfit([128, 97, 121, 123, 98, 97, 105]));