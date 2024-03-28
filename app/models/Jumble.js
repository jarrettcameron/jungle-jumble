export class Jumble {

    constructor(data) {
        this.name = data.name
        this.body = data.body
        this.fastestTime = data.fastestTime || null
        this.startTime = null
        this.endTime = null
    }

    get getWPM() {
        return (this.body.split(' ').length / this.fastestTime) * 60
    }

    get sidemenuHTML() {
        return `<div class="p-3 row align-content-center align-items-center justify-content-center">
        <div class="col-2">
            <button class="btn btn-warning px-4">Start</button>
        </div>
        <div class="col-4">
            <span class="ps-3 fs-4">${this.name}</span>
        </div>
        <div class="col-3 text-end">
            <i class="fs-4 mdi mdi-clock"></i>
            <span class="ps-3 fs-3">${this.fastestTime == null ? '--.-' : this.fastestTime}s</span>
        </div>
        <div class="col-3 fs-3 text-end">${this.getWPM} wpm</div>
    </div>`
    }

}