import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
import { NegociacaoView } from '../views/necociacoes-view.js';
import { MensagemView } from '../views/mensagem-view.js';
import { DiaDaSemana } from '../enums/dia-da-semana.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacaoView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector("#data");
        this.InputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacaoTemp = new Negociacao(null, 0, 0);
        const negociacao = negociacaoTemp.criaDe(this.inputData.value, this.InputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
            return;
        }
        this.negociacoes.adicona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    ehDiaUtil(data) {
        return data.getDay() > DiaDaSemana.DOMINGO
            && data.getDay() < DiaDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = "";
        this.InputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso");
    }
}
