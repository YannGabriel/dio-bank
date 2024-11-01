
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <h1 className="login">
        Faça o Login
      </h1>

      <input type="text" />
      <input type="password" />
      <button className="sendFormsInfos">Entrar</button>
    </Layout>
  );
}

export default App;
