// 사용자로부터 입력받은 성적에 따라 등급을 출력하는 프로그램을 작성하세요.
// 성적이 90점 이상이면 "A", 80점 이상이면 "B", 70점 이상이면 "C", 60점 이상이면 "D", 그 외에는 “강해져서 돌아와라”를 출력합니다.

function yourGradeIF(yourScore) {
    console.log("이건 if문");
    if(yourScore >= 90) {
        console.log('A');
    }
    else if(yourScore >= 80) {
        console.log('B');
    }
    else if(yourScore >= 70) {
        console.log('C')
    }
    else if (yourScore >= 60) {
        console.log('D');
    }
    else {
        console.log("강해져서 돌아와라");
    }
}

function yourGradeTernary(yourScore) {
    console.log("이건 삼항연산자");
    const message = yourScore >= 90 ? 'A' :
                            yourScore >= 80 ? 'B' :
                                yourScore >= 70 ? 'C' :
                                    yourScore >= 60 ? 'D' : "강해져서 돌아와라";
    console.log(message);
}

const score = parseInt(prompt("점수를 입력하세요"));
yourGradeIF(score);
yourGradeTernary(score);