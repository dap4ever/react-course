import { Header } from "./components/header";
import { Photo } from "./components/Photo";

// aula 08

// const App = () => {
//   let n1: number = 10;
//   let n2: number = 3;

//  function somar (n1: number, n2: number): number {
//   return n1 + n2;
//  }

//   return (
//     <div>Multiplicação: {somar(n1, n2)}</div>
//   );
// }

//aula 11
const App = () => {
  return (
    <div>
      <Header title="Exemplo props" />
      Olá Mundo
      <Photo url="http://www.google.com.br//google.jpg" legend="Google" />
    </div>
  );
};

export default App;
