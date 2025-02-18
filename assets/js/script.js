
//EXEMPLO DE POLIMORFISMO
    
    class Animal {
        falar() {
        console.log("Esse animal faz um som.");
        }
    }
    
    class Cachorro extends Animal {
        falar() {
        console.log("O cachorro late!");
        }
    }
    
    class Gato extends Animal {
        falar() {
        console.log("O gato mia!");
        }
    }
    
    class Leao extends Animal {
        falar() {
        console.log("O leão ruge!");
        }
    }
    
    const cachorro = new Cachorro();
    const gato = new Gato();
    const leao = new Leao();
    
    cachorro.falar(); // O cachorro late!
    gato.falar(); // O gato mia!
    leao.falar(); // O leão ruge!
    