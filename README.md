# Implement FIFO queue with two stacks

## Requirements

- node \>= 5
- npm \>= 3

## Install & Test

```
npm run install
npm run test
```

- Check [stack.js](./stack.js) to understand how a Stack data structure works.
- Edit your solution in [exercise.js](./exercise.js).
- All tests in [test.js](./test.js) must pass. You can add further test cases.

## Description

A [queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) is an abstract data type that maintains the order in 
which elements were added to it, allowing the oldest elements to be removed from the front and new elements to be 
added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added to the 
queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

A basic queue has the following operations:

- **Enqueue**: add a new element to the end of the queue.
- **Dequeue**: remove the element from the front of the queue and return it.

In this challenge, you must first implement a queue using two [stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)). 
Then process `n` queries, where each query is one of the following 3 types:

1. `1 x`: Enqueue element `x` into the end of the queue.
2. `2`: Dequeue the element at the front of the queue.
3. `3`: Print the element at the front of the queue.

## Input Format

Each item `i` of the `n` list contains a single query in the form described in the problem statement above. 
All three queries start with an integer denoting the query `type`, but only query `1` is followed by an additional 
space-separated value, `x`, denoting the value to be enqueued.

## Constraints

- 1 \<= `n` \<= 10<sup>5</sup> 
- 1 \<= `type` \<= 3 
- 1 \<= `|x|` \<= 10<sup>9</sup> 
- It is guaranteed that a valid answer always exists for each query of type `3`.

## Output Format

For each query of type `3`, add the value of the element to the result vector and return it.

## Sample Input

```
[
  '1 42',
  '2',
  '1 14',
  '3',
  '1 28',
  '3',
  '1 60',
  '1 78',
  '2',
  '2'
]
```

## Sample Output

```
[
  '14',
  '14'
]
```

## Explanation

We perform the following sequence of actions:

- Enqueue 42; queue = { 42 }.
- Dequeue the value at the head of the queue, 42; queue = { }.
- Enqueue 14; queue = { }.
- Append the value at the head of the queue to result vector; result = \[ 14 \], queue = { 14 }.
- Enqueue 28; queue = { 14, 28 }.
- Append the value at the head of the queue to result vector; result = \[ 14, 14 \], queue = { 14, 28 }.
- Enqueue 60; queue = { 14, 28, 60 }.
- Enqueue 78; queue = { 14, 28, 60, 78 }.
- Dequeue the value at the head of the queue, 14; queue = { 28, 60, 78 }.
- Dequeue the value at the head of the queue, 28; queue = { 60, 78 }.

## Evaluation

- Correct and optimized usage of [stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
- Cost of actions
- Additional test cases
