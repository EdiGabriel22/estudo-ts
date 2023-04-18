import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController {
    private inputData: HTMLInputElement
    private InputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement

    constructor() {
        this.inputData = document.querySelector("#data")
        this.InputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    adiciona() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.InputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        const negociacao = new Negociacao( date, quantidade, valor )

        console.log(negociacao)
    }
}