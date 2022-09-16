class Usuario {
    constructor(name, lastName, books, pets) {
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }

    getFullName() {
        console.log(`Hola soy ${this.name} ${this.lastName}`);
    }

    addMascota(pet) {
        this.pets.push(pet);
    }

    countMascotas() {
        console.log(this.pets.length);

    }

    addBook(nm, aut) {
        this.books.push({ author: aut, name: nm });
    }

    getBookNames() {
        let arr = [];

        for (let i = 0; i <= this.books.length - 1; i++) {
            arr.push(this.books[i].name);
        }

        console.log(arr);
    }

}

let usuario = new Usuario('ale', 'heredia', [{ author: 'stv', name: 'la isla' }, { author: 'alt', name: '1716' }], ['dio', 'fiona']);

console.log(usuario);
usuario.getFullName();
usuario.addMascota('Boris');
console.log(usuario)
usuario.countMascotas();
usuario.addBook('Martin Fierro', 'Jose Hernandez')
console.log(usuario);
usuario.getBookNames();