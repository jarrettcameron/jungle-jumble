import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { loadState, saveState } from "../utils/Store.js"

class JumblesService {

    startJumble(name) {
        AppState.activeJumble = AppState.jumbles.find(jumble => jumble.name == name)
        AppState.activeJumble.startTime = Date.now()
    }

    submitJumble(data) {
        if (data.prompt == AppState.activeJumble.body) {
            AppState.activeJumble.endTime = Date.now()
            let timeTaken = (AppState.activeJumble.endTime - AppState.activeJumble.startTime) / 1000
            if (timeTaken < (AppState.activeJumble.fastestTime == null ? Infinity : AppState.activeJumble.fastestTime)) {
                AppState.activeJumble.fastestTime = timeTaken
            }
            AppState.activeJumble.startTime = null
            AppState.activeJumble.endTime = null
        } else {
            alert('urbad')
        }
        this.saveData()
    }

    saveData() {
        saveState('jumbles', AppState.jumbles)
    }

    loadData() {
        const jumblesFromLocalStorage = loadState('jumbles', [Jumble])
        if (jumblesFromLocalStorage.length == 0) return
        AppState.jumbles = jumblesFromLocalStorage
    }

}

export const jumblesService = new JumblesService()