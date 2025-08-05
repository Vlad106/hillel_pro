'use strict';

function Student (firstName, lastName, birthYear, lessonsCount = 25) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.lessonsCount = lessonsCount;

    this.marks = new Array(lessonsCount);
    this.attendances = new Array(lessonsCount);

    this.currentLesson = 1;
}

Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.birthYear;

}

Student.prototype.maxMark = 100;
Student.prototype.minMark = 0;
Student.prototype._getCurrentLessonIndex = function (){
    return this.currentLesson - 1;
}
Student.prototype._setAttendance = function (isPresent) {
    if (typeof isPresent !== "boolean") throw new Error("isPresent should be boolean");

    if (this.currentLesson > this.lessonsCount) {
        throw new Error(`lessonsCount should be less or equal than ${this.lessonsCount}`);
    }

    this.attendances[this._getCurrentLessonIndex()] = isPresent;
    this.currentLesson += 1;
}

Student.prototype._averageMarks = function (){
    const marksData = this.marks.reduce((acc, mark) => {
        acc.sum += mark;
        acc.count += 1;

        return acc;
    }, {sum: 0, count: 0});

    return Math.floor(marksData.sum / marksData.count);
}
Student.prototype._averageLessons = function (){
    const {visited, count} = this.attendances.reduce((acc, att) => {
        if (att) acc.visited += 1;
        if (typeof att === 'boolean') acc.count += 1;

        return acc;
    }, {visited: 0, count: 0});
    return Number((visited / count).toFixed(2));
}


Student.prototype.present = function() {
    this._setAttendance(true)
}
Student.prototype.absent = function() {
    this._setAttendance(false)
}

Student.prototype.setMark = function (mark) {
    if (typeof mark !== "number" && isNaN(mark)) throw new Error("mark should be number");
    if (mark < this.minMark || mark > this.maxMark) throw new Error("mark must be less than 100 and more than 0");
    const currentLessonIndex = this._getCurrentLessonIndex() - 1;

    if (this.attendances[currentLessonIndex]) {
        this.marks[currentLessonIndex] = mark;
    } else {
        console.warn('You cannot set mark for this lesson')
    }
}

Student.prototype.summary = function() {
    return {
        avgMark: this._averageMarks(),
        avgLessons: this._averageLessons(),
    }

}

