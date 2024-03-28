import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class JumblesController {

    constructor() {
        this.drawJumbles()
    }

    drawJumbles() {
        let jumbleContent = ''
        AppState.jumbles.forEach(jumble => jumbleContent += jumble.sidemenuHTML)
        setHTML('jumble-container', jumbleContent)
    }

}