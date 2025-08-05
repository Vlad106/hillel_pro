'use strict';

const student = new Student ( 'Vlad', 'Levchuk', '2004', 12);

student.present()
student.setMark(100)

student.present()
student.setMark(100)

student.present()
student.setMark(100)

student.present()
student.setMark(12)

student.absent()
student.setMark(12)

student.present()
student.setMark(90)

student.present()
student.setMark(100)

student.present()
student.setMark(100)

student.present()
student.setMark(55)

console.log(student.summary());
console.log(student.getAge());