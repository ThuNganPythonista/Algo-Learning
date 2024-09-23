# Array data structure

##### How to find the missing number in a given array of integers from 1 to 100?

If calculated using algebra, we would take the sum of the values in the array with no number were missing subtracting the sum of the values present in the array when there is the missing number

Sum = [n(n+1)]/2

##### How can you find the duplicate number in a given array of integers?

Set() is used to keep track of elements that have existed. Set helps check the existence of an element faster than using arrays and includes().

##### How can you find the largest and smallest number in an unsorted array?

Take the first element and compare it with the remaining elements.

##### How to find all pairs of numbers in an integer array whose sum equals a given number?

arr[i]+arr[j];
j=i+1;

##### What is the way to find all duplicate numbers in an array if it contains multiple repeating numbers?

One Set() to store elements in a Set(), one Set() to represent the seen status, and one Array.from to convert the Set into an Array
