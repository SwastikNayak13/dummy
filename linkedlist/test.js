var mergeTwoLists = function(list1, list2) {
   
    let curr=list1;
    let temp
    while(curr){
        temp=curr
        curr=curr.next
    }    
    temp.next=list2;
    console.log(list1)
    let k;

    for(let i=list1;i!=null;i=i.next){
        k=0
        for(let j=list1;j!=null;j=j.next){
            if(j.next)
           if (j.value>j.next.value){
            j.value=j.value-j.next.value
            j.next.value=j.value+j.next.value
            j.value=j.next.value-j.value
            k=1
        }

        }
        if(k==0) break;
    }
return list1

    

    
};

console.log(mergeTwoLists({
    value: 1,
    next: {
      value: 2,
      next: {
        value: 4,
        next: null
      }
    }
  },{
    value: 1,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }))