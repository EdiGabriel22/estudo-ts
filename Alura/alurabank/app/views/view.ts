export abstract class View<T> {

    protected elemento: HTMLElement
    private escapar = false

    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor)
        if (escapar) {
            this.escapar = escapar
        }
    }

    public update(model: T): void {
        let template = this.template(model)
        if (this.escapar) {
            template = template.replace(/<srcipt>[\s\S]*?<\/srcipt>/, '')
        }
        this.elemento.innerHTML = template
    }

    protected abstract template(model: T): string
}