(function() {
    let template = document.createElement("template");
    template.innerHTML = `
        <style>
            :host { display: block; width: 100%; height: 100%; }
            #car-container { width: 100%; height: 100%; }
            img { width: 100%; height: auto; }
        </style>
        <div id="car-container">
            <img src="https://cdn.jsdelivr.net/gh/parth6020/carsgif@main/workingif.gif" alt="Car Animation">
        </div>
    `;

    class CarVanishWidget extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
        }
        // connectedCallback is empty so the car stays visible
        connectedCallback() {}
    }
    customElements.define("com-parth-car-finish", CarVanishWidget);
})();

