import React, {useState} from 'react';// useState é um hook
import ReactDOM from 'react-dom';
import './index.css';

const Calculadora: React.FC = () => {

    const [entrada, setEntrada] = useState<string>('');// entrada é a variavel e setEntrada é para atualizar o valor 

    const clicarBotao = (valor: string) => { //Uma função para acionar o evento de clicar qualquer botão da calculadora
        setEntrada(entrada + valor);
    };

    const calcular = () => {
        try {
            setEntrada(eval(entrada)+'');
        } catch {
            setEntrada('Erro');
        }
    };

    const limpar = () => {
        setEntrada('');
    };

    return (
        <div>
            <div className="display">{entrada}</div>
            <div>
                {['1', '2', '3'].map((botao) => (
                                                                    //map: mapeia esse array de simbolos para um botão individual cada
                    <button onClick={() => clicarBotao(botao)} key={botao}>{botao}</button>
                ))}
                <br />
                {['4', '5', '6'].map((botao) => (
                                                                    //map: mapeia esse array de simbolos para um botão individual cada
                    <button onClick={() => clicarBotao(botao)} key={botao}>{botao}</button>
                ))}
                <br />
                {['7', '8', '9'].map((botao) => (
                                                                    //map: mapeia esse array de simbolos para um botão individual cada
                    <button onClick={() => clicarBotao(botao)} key={botao}>{botao}</button>
                ))}
                <br />
                {['0', '*', '/'].map((botao) => (
                                                                    //map: mapeia esse array de simbolos para um botão individual cada
                    <button onClick={() => clicarBotao(botao)} key={botao}>{botao}</button>
                ))}
                <br />
                <div className="btnEspecialH">
                {['+', '-'].map((botao) => (
                                                                    //map: mapeia esse array de simbolos para um botão individual cada
                    <button onClick={() => clicarBotao(botao)} key={botao}>{botao}</button>
                ))}
                <button onClick={limpar}>C</button>
                <button onClick={calcular}>=</button>
                </div>
            </div>
        </div>
    )

};

ReactDOM.render(
    <React.StrictMode>
      <Calculadora />
    </React.StrictMode>,
    document.getElementById('root')
);

export default Calculadora;