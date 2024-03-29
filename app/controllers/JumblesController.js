import { AppState } from "../AppState.js";
import { jumblesService } from "../services/JumblesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { loadState } from "../utils/Store.js";
import { setHTML, setText } from "../utils/Writer.js";

export class JumblesController {

    constructor() {
        AppState.on('jumbles', this.drawJumbles)
        this.drawJumbles()
        AppState.on('activeJumble', this.drawActiveJumble)
        jumblesService.loadData()

    }

    drawJumbles() {
        let jumbleContent = ''
        AppState.jumbles.forEach(jumble => jumbleContent += jumble.sidemenuHTML)
        setHTML('jumble-container', jumbleContent)
    }

    submitJumble() {
        event.preventDefault()
        const formData = getFormData(event.target)
        jumblesService.submitJumble(formData)
        this.drawActiveJumble()
        this.drawJumbles()
    }

    startJumble(name) {
        jumblesService.startJumble(name)
    }

    drawActiveJumble() {
        setText('name', AppState.activeJumble.name)
        setText('fastestTime', `Fastest Time: ${AppState.activeJumble.fastestTime == null ? '--.-' : AppState.activeJumble.fastestTime.toFixed(1)}s`)
        setText('prompt', AppState.activeJumble.body)
    }

}