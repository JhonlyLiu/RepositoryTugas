let date = new Date(2022, 1, 28, 7, 0, 0, 0);
let session1 = new Date(2022, 1, 28, 9, 40, 0, 0);
let session2 = new Date(2022, 1, 28, 12, 40, 0, 0);
let session3 = new Date(2022, 1, 28, 15, 0, 0, 0);
let thursday = new Date(2022, 2, 3, 17, 0, 0, 0);
let friday = new Date(2022, 2, 4, 12, 40, 0, 0);
let bellCount = 0;

function countNormalDay(){
  bellCount++;
  while(date<session1){
    date.setMinutes(date.getMinutes() + 40);
    bellCount++;
  }
  date.setMinutes(date.getMinutes() + 20);
  bellCount++;
  while(date<session2){
    date.setMinutes(date.getMinutes() + 40);
    bellCount++;
  }
  date.setMinutes(date.getMinutes() + 20);
  bellCount++;
  while(date<session3){
    date.setMinutes(date.getMinutes() + 40);
    bellCount++;
  }
  date.setHours(date.getHours() + 2);
  bellCount++;
}

function countFriday(){
  bellCount++;
  while(date<session1){
    date.setMinutes(date.getMinutes() + 40);
    bellCount++;
  }
  date.setMinutes(date.getMinutes() + 20);
  bellCount++;
  while(date<session2){
    date.setMinutes(date.getMinutes() + 40);
    bellCount++;
  }
}

while(date<thursday){
  countNormalDay();
  date.setHours(date.getHours() - 10);
  date.setDate(date.getDate() + 1);
  session1.setDate(session1.getDate() + 1);
  session2.setDate(session2.getDate() + 1);
  session3.setDate(session3.getDate() + 1);
}
countFriday();
alert('Total Weekly Bell Count = ' + bellCount);
alert(date);
console.log('Total Weekly Bell Count = ' + bellCount);
console.log(date);



