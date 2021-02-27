import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistamaAutenticacao.js";

const diretor = new Diretor("Marcio", 10000, 123456);
diretor.cadastrarSenha("123123");
const gerente = new Gerente("Thais", 5000, 854321);
gerente.cadastrarSenha("321321");

const estaLogadoDir = SistemaAutenticacao.login(diretor, "123123");
const estaLogadoGer = SistemaAutenticacao.login(gerente, "321321");
console.log(estaLogadoDir);
console.log(estaLogadoGer);
