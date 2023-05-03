import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
import { NegociacaoView } from '../views/necociacoes-view.js';

export class NegociacaoController {
    private inputData: HTMLInputElement
    private InputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes: Negociacoes = new Negociacoes()
    private negociacoesView = new NegociacaoView('#negociacoesView')

    constructor() {
        this.inputData = document.querySelector("#data")
        this.InputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
        this.negociacoesView.update(this.negociacoes)
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao()
        this.negociacoes.adicona(negociacao)
        this.negociacoesView.update(this.negociacoes)
        this.limparFormulario()
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.InputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao( date, quantidade, valor )
    }

    limparFormulario(): void {
        this.inputData.value = ""
        this.InputQuantidade.value = ""
        this.inputValor.value = ""
        this.inputData.focus()
    }
}