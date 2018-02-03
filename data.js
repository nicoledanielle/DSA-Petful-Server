'use strict';

class _Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const pet = new _Node(data);
    if (this.first === null) {
      this.first = pet;
    }
    if(this.last) {
      pet.next = this.last;
      this.last.prev = pet;
    }
    this.last = pet;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const pet = this.first;
    this.first = pet.prev;
    if (pet === this.last) {
      this.last = null;
    }
    return pet.data;
  }
}

let catQueue = new Queue();
catQueue.enqueue(catData[0]);
catQueue.enqueue(catData[1]);
catQueue.enqueue(catData[2]);

let dogQueue = new Queue();
dogQueue.enqueue(dogData[0]);
dogQueue.enqueue(dogData[1]);
dogQueue.enqueue(dogData[2]);

const peek = queue => {
  if(queue.first) {
    return queue.first.data;
  }
};

let catData = [{
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
},
{
  imageURL:'https://vetstreet.brightspotcdn.com/dims4/default/02bd838/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa3%2F767b00a33511e087a80050568d634f%2Ffile%2FSphynx-4-645mk062211.jpg',
  imageDescription: 'Mexican hairless cat with green eyes looking into the distance.',
  name: 'King',
  sex: 'Male',
  age: 4,
  breed: 'Mexican Hairless',
  story: 'He wandered into the shelter one day on his own'
},
{
  imageURL:'https://www.petsworld.in/blog/wp-content/uploads/2015/10/abstract_siamese_cat_high_quality.jpg',
  imageDescription: 'A white siamese cat with a black striped tail looks at the camera in a field of grass',
  name: 'Jack',
  sex: 'Male',
  age: 0,
  breed: 'Siamese',
  story: 'Last of the litter of siamese kittens born at the shelter'
}
];
  
let dogData = [{
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner passed away'
},
{
  imageURL: 'https://petnet-wp.s3.amazonaws.com/wp-content/uploads/2017/10/AdobeStock_1193143.jpeg',
  imageDescription: 'A spotted black and white catahoula dog with its tongue sticking out',
  name: 'Lucky',
  sex: 'Female',
  age: 0,
  breed: 'Catahoula Leopard Dog',
  story: 'Left by a breeder'
},
{
  imageURL: 'https://pet-uploads.adoptapet.com/c/0/3/194113705.jpg',
  imageDescription: 'An old brown Brussels Griffon dog standing in grass',
  name: 'Mr. Woo',
  sex: 'Male',
  age: 12,
  breed: 'Brussels Griffon',
  story: 'Owner moved. Mr. Woo is an instagram model and comes with his own handle!'
}];

module.exports = { catData, dogData, catQueue, dogQueue, peek };