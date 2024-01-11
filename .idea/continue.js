// while 문을 이용해서 1부터 10까지 숫자를 출력하세요. 이때 4와 7은 건너뛰고 출력합니다.
let i = 0;
while(i < 10) {
    i++;
    if (i === 4 || i === 7) {
        continue;
    }
    console.log(i);
}