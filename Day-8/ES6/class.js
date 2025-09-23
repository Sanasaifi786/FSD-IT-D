class Student{
    constructor(name,age)
    {
        this.name = name;
        this.age= age;
    }
    greet()
    {
        console.log(`Hello i am ${this.name} and i am ${this.age} years old`);
    }
}
Student std = new Student("sana",21);