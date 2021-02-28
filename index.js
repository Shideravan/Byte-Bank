import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistamaAutenticacao.js";

const diretor = new Diretor("Marcio", 10000, 123456);
diretor.cadastrarSenha("123123");
const gerente = new Gerente("Thais", 5000, 854321);
gerente.cadastrarSenha("321321");
const cliente = new Cliente("Lais", 121212, "456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123123");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "321321");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);
