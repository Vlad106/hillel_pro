'use strict';


export class Student {
    static LESSONS_COUNT = 25;

    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;

        this.marks = [];
        this.attendance = new Array(Student.LESSONS_COUNT).fill(null);
        this.currentLesson = 0;
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    addMark(mark) {
        if (typeof mark !== "number" || mark < 0 || mark > 100) {
            throw new Error("Оцінка повинна бути числом від 0 до 100");
        }
        this.marks.push(mark);
    }

    getAverageMark() {
        if (this.marks.length === 0) return 0;
        const sum = this.marks.reduce((a, b) => a + b, 0);
        return sum / this.marks.length;
    }

    present() {
        if (this.currentLesson >= Student.LESSONS_COUNT) {
            console.warn("Межа відвідувань досягнута!");
            return;
        }
        this.attendance[this.currentLesson++] = true;
    }

    absent() {
        if (this.currentLesson >= Student.LESSONS_COUNT) {
            console.warn("Межа відвідувань досягнута!");
            return;
        }
        this.attendance[this.currentLesson++] = false;
    }

    getAverageAttendance() {
        const visited = this.attendance.filter(v => v === true).length;
        const total = this.attendance.filter(v => v !== null).length;
        return total === 0 ? 0 : visited / total;
    }

    summary() {
        const avgMark = this.getAverageMark();
        const avgAttendance = this.getAverageAttendance();

        if (avgMark > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgMark > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}
