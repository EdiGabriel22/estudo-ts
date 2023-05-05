import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
import { NegociacaoView } from '../views/necociacoes-view.js';
import { MensagemView } from '../views/mensagem-view.js';
import { DiaDaSemana } from '../enums/dia-da-semana.js';

export class NegociacaoController {
    private inputData: HTMLInputElement
    private InputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes: Negociacoes = new Negociacoes()
    private negociacoesView = new NegociacaoView('#negociacoesView', true)
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this.inputData = document.querySelector("#data")
        this.InputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
        this.negociacoesView.update(this.negociacoes)
    }

    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.InputQuantidade.value,
            this.inputValor.value
        )
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas")
            return
        } 

        this.negociacoes.adicona(negociacao)
        this.limparFormulario()
        this.atualizaView()
        
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiaDaSemana.DOMINGO 
            && data.getDay() < DiaDaSemana.SABADO
    }

    private limparFormulario(): void {
        this.inputData.value = ""
        this.InputQuantidade.value = ""
        this.inputValor.value = ""
        this.inputData.focus()
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociação adicionada com sucesso")
    }
}