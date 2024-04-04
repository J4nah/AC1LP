class Main {
    usuarios;

    constructor() {
        this.usuarios = [];
    }

    addUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    addLivroUsuario(idUsuario, codigoLivro, titulo, autor) {
        const livro = new Livro(codigoLivro, titulo, autor);

        const usuario = this.usuarios.find(u => u.id === idUsuario);
        usuario.inserirLivroEmprestado(livro);
    }

    transferirLivro(idUsuarioOrigem, idUsuarioDestino, codigo) {
        const usuarioOrigem = this.usuarios.find(p => p.getId() === idUsuarioOrigem);
        const usuarioDestino = this.usuarios.find(p => p.getId() === idUsuarioDestino);

        if (usuarioOrigem && usuarioDestino) {
            const livro = usuarioOrigem.getLivroEmprestado(codigo);
            if (livro) {
                usuarioDestino.inserirLivroEmprestado(livro);
                usuarioOrigem.removerLivroEmprestadoByCodigo(codigo);
            }
        }
    }


    mostrarTodosOsUsuarios() {
        for (let item of this.usuarios) {
            console.log(item.imprimirCompleto());
        }
    }
}

const main = new Main();
main.addUsuario(new Usuario("Carlos", 1));
main.addLivroUsuario(1, 1, "Dom Quixote", "Miguel de Cervantes");
main.addLivroUsuario(1, 2, "Orgulho e Preconceito", "Jane Austen");
main.mostrarTodosOsUsuarios();
main.addUsuario(new Usuario("Ana", 2));
main.transferirLivro(1, 2, 1);
main.mostrarTodosOsUsuarios();