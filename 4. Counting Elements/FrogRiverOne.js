/********FrogRiverOne*********/
//Try 1; 100% correctness, timeouts on large arrays
// function solution(X,A) {
//     let count = 1;
//     let index = -1;

//     for(let i=0;i<X;i+=1) {
//         if( A.indexOf(count) === -1 ) { 
//             return -1;    
//         } 
//         index = ( A.indexOf(count) > index ) ? A.indexOf(count) : index;
//         count++;  
//     }

//     return index;
// }

//Try 2 
//100% score: https://app.codility.com/demo/results/trainingRHVVW6-SRR/

function solution(X,A) {
    const counts = {};
    const sol = [];
    let pos = -1;

    for( let i =0;i<A.length;i+=1 ) {
        if( !counts[A[i]] ) {
            counts[A[i]] = true;
            sol.push(counts[A[i]]);
        } 
        if( sol.length === X ) {
            pos = i;
            break;
        }
    }
    return pos;
}
// let X = 5;
// let A = [1,3,1,4,2,3,5,4];
// let X = 3;
// let A = [1, 3, 1, 3, 2, 1, 3];
let X = 1;
let A = [1];
console.log(solution(X,A));