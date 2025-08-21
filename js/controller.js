'use strict';

import { Student } from "./model.js";
import { StudentView } from "./view.js";

class StudentController {
    constructor() {
        this.students = [];
        this.view = new StudentView();
    }

    addStudent(firstName, lastName, birthYear) {
        const student = new Student(firstName, lastName, birthYear);
        this.students.push(student);
        return student;
    }

    showAllStudents() {
        this.students.forEach(student => this.view.renderStudentInfo(student));
    }
}


const controller = new StudentController();

const s1 = controller.addStudent("Іван", "Петренко", 2000);
const s2 = controller.addStudent("Марія", "Іваненко", 2002);
const s3 = controller.addStudent("Олег", "Сидоренко", 2001);

s1.addMark(100);
s1.addMark(95);
s1.present();
s1.present();
s1.absent();

s2.addMark(70);
s2.addMark(80);
s2.present();
s2.absent();

s3.addMark(50);
s3.addMark(60);
s3.absent();
s3.absent();

controller.showAllStudents();
