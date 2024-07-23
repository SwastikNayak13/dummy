class node {
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
  constructor(head){
    this.head=head;
  }


  print(){
    console.log(this.head)
  }

  push(data){
    
    let n = new node(data)
    let curr=this.head;
    let temp;
    while(curr){
        temp=curr
        curr=curr.next
    }
    temp.next=n
  }
}


let node1 = new node(10);
let node2 = new node(20);

node1.next=node2;

let list = new LinkedList(node1);

list.print();
list.push(30);
list.print();