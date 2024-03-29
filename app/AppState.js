import { Jumble } from './models/Jumble.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  jumbles = [
    new Jumble({
      name: 'Easy Jumble',
      body: "Orangutans go bananas for fruit salad, especially when it's filled with juicy pineapples."
    }),
    new Jumble({
      name: 'Medium Jumble',
      body: "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late."
    }),
    new Jumble({
      name: 'Crazy Jumble',
      body: "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris."
    })
  ]

  activeJumble = null

}

export const AppState = createObservableProxy(new ObservableAppState())