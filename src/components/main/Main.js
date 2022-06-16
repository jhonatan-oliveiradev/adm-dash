import hello from '../../assets/hello.webp';
import Chart from '../charts/Chart';
import './Main.css';

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="" />
          <div className="main__greeting">
            <h1>Olá, Usuário</h1>
            <p>Bem-vindo ao seu painel</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-file-text fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Pedidos</p>
              <span className="font-bold text-title">426</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-credit-card fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Pagamentos</p>
              <span className="font-bold text-title">R$3.589</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-archive fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Produtos</p>
              <span className="font-bold text-title">R$3.589</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-window-restore fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Categorias</p>
              <span className="font-bold text-title">27</span>
            </div>
          </div>
        </div>
      </div>

      <div className="charts">
        <div className="charts__left">
          <div className="charts__left__title">
            <div>
              <h1>Daily Reports</h1>
              <p>Ribeirão Preto, São Paulo - BR</p>
            </div>
            <i className="fa fa-usd"></i>
          </div>
          <Chart />
        </div>

        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <h1>Daily Reports</h1>
              <p>Ribeirão Preto, São Paulo - BR</p>
            </div>
            <i className="fa fa-area-chart"></i>
          </div>

          <div className="charts__right__cards">
            <div className="card-1">
              <h1>Lucro</h1>
              <p>R$4.665</p>
            </div>

            <div className="card-2">
              <h1>Pagamentos</h1>
              <p>R$521</p>
            </div>

            <div className="card-3">
              <h1>Custos de hospedagem</h1>
              <p>R$125</p>
            </div>

            <div className="card-4">
              <h1>Banco de dados</h1>
              <p>R$190</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
