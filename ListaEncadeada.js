class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.child = null;  // Referência ao filho da pessoa
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(person) {
        if (!this.head) {
            this.head = person;
            return;
        }

        let current = this.head;
        while (current.child) {
            current = current.child;
        }
        current.child = person;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(`Name: ${current.name}, Age: ${current.age}`);
            if (current.child) {
                console.log(`  Child: ${current.child.name}`);
            }
            console.log("----");
            current = current.child;
        }
    }
}

// Criando pessoas
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 28);
const person3 = new Person("Charlie", 5);
const person4 = new Person("David", 2);

// Estabelecendo as relações de filho
person1.child = person3;
person2.child = person4;

// Criando a lista encadeada
const linkedList = new LinkedList();
linkedList.append(person1);
linkedList.append(person2);

// Exibindo a lista encadeada
linkedList.display();
