let n=[ 23, 393, 8932, 9393, 29293,9 ]
let k;
for(let i = 0;i<n.length;i++){
    k=0
    for(let j=0;j<n.length;j++){
        if (j.val>j.next.val){
            j.val=j.val-j.next.val
            j.next.val=j.val+j.next.val
            j.val=j.next.val-j.val
            k=1
        }
        
    }if(k==0) break;
}

console.log(n);