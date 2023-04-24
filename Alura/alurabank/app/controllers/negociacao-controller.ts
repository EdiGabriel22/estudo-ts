import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController {
    private inputData: HTMLInputElement
    private InputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes: Negociacoes = new Negociacoes()

    constructor() {
        this.inputData = document.querySelector("#data")
        this.InputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao()
        this.negociacoes.adicona(negociacao)
        console.log(this.negociacoes.lista())
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