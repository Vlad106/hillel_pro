 'use strict';

//indexOf
 function myIndexOf(arr , values){
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] === values){
             return i;
         }
     }
     return -1;
 }
 console.log(myIndexOf(['a', 'b', 'c', 'd'], 'd'));

 console.log('********');

 //lastIndexOf
 function myLastIndexOf(arr , values){
     for (let i = arr.length - 1; i >= 0; i--) {
         if (arr[i] === values){
             return i;
         }
     }
     return -1;
 }
 console.log(myLastIndexOf(['a', 'b', 'c', 'd'],  'e'));
 console.log(myLastIndexOf(['a', 'b', 'c', 'd'],  'b'));

 console.log('********');

 //find
 function myFind(arr , cb){
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])){
            return arr[i];
        }
    }
    return undefined;
 }
 const result = myFind(['a', 'b', 'c', 'd', 'e'], (el) => {
    return el === 'd';
 });
 console.log(result);

 console.log('********');

 //findIndex
 function myFindIndex(arr , cb){
     for (let i = 0; i < arr.length; i++) {
         if (cb(arr[i])){
             return i;
         }
     }
     return -1;
 }
 const index = myFindIndex(['a', 'b', 'c', 'd', 'e'], (el) => {
     return el === 'd';
 });
 console.log(index);

 console.log('********');

 //includes
 function myIncludes (arr , values, index){
     for (let i = index; i < arr.length; i++) {
         if (arr[i] === values){
             return true;
         }
     }
     return false;
 }
 console.log(myIncludes(['a', 'b', 'c', 'd', 'e'], 'd' , 2));
 console.log(myIncludes(['a', 'b', 'c', 'd', 'e'], 'i' , 0));
 console.log(myIncludes(['a', 'b', 'c', 'd', 'e'], 'd' , 4));


 console.log('********');

 //every
 function myEvery (arr , cb){
     for (let i = 0; i < arr.length; i++) {
         if (!cb(arr[i])){
             return false;
         }
     }
     return true;
 }
 console.log(myEvery([1, 2, 3, 4, 5], el => el > 0));
 console.log(myEvery([1, 2, 3, 4, 5], el => el < 0));

 console.log('********');

 //some
 function mySome (arr , cb){
     for (let i = 0; i < arr.length; i++) {
         if (cb(arr[i])){
             return true;
         }
     }
     return false;
 }
 console.log(mySome([1, 2, 3, 4, 5], el => el === 3));
 console.log(mySome([1, 2, 3, 4, 5], el => el === 0));

 console.log('********');