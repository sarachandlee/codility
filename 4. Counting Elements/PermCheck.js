//100%: https://app.codility.com/demo/results/trainingYJGPG2-EPM/
function solution(A) {
    const n = A.length;
    const sumB = (n * (n+1))/2;
    const sumA = A.reduce((a,b) => a+b);

    //if the sums aren't equal, return 0
    if (sumB != sumA ) {
        return 0;
    } else {
        A = A.sort((a,b)=>a-b);
        for(let i=1;i<n;i+=2) {
            if( A[i-1] == A[i] ) {
                //We've got a dupe
                return 0;
            }
        }
        return 1;
    }
}

let A = [1,4,2,1];
console.log(solution(A));