// splice 문제
// const fish = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리'];
// 1. splice 를 이용해 코끼리를 제거해보세요
// 2. 참치 다음에 다금바리를 추가해보세요
// 3. 돌고래를 제거하고 옥돔과 갈치를 추가해보세요

const fish = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리'];
fish.splice(5, 1);
console.log(fish);

fish.splice(4, 0, "다금바리");
console.log(fish);

fish.splice(2, 1, "옥돔", "갈치");
console.log(fish);


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr.map(function(el) {
    if( el % 2 === 0){
        return el;
    }
});

console.log(newArr);