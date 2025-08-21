'use strict';

export class StudentView {
    renderStudentInfo(student) {
        console.log(` Студент: ${student.firstName} ${student.lastName}, Вік: ${student.getAge()}`);
        console.log(` Середній бал: ${student.getAverageMark().toFixed(2)}`);
        console.log(` Відвідуваність: ${(student.getAverageAttendance() * 100).toFixed(0)}%`);
        console.log(` Підсумок: ${student.summary()}`);
        console.log("----------------------");
    }
}
