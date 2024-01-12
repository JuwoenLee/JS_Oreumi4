function Person (name, subject) {
    this.name = name;
    this.subject = subject;

    this.study = function() {
        console.log(`${this.name}님은 ${this.subject}를 공부하시는군요!`);
    }
}
const person1 = new Person("주호", "간호학");
const person2 = new Person("준민", "전기");
const person3 = new Person("주원", "프로그래밍");


person1.study();
person2.study();
person3.study();

console.log(person1.study === person2.study);
