class Store {
  constructor(state = {}, actions = {}, render = () => {}) {
    this.state = state
    this.actions = actions
    this.render = render
    this.dispatch = (action, options) => {
      const newMergeData = this.actions[action](this.state, options)
      Object.assign(this.state, newMergeData)
      this.render(this)
    }
  }
}

(() => {
  const state = {
    date: new Date().getTime(),
  }

  const actions = {
    CHANGE_DATE(state, options) {
      return { date: new Date().getTime() }
    },
  }

  const entry = document.querySelector('.entry')

  const Child = ({ date }) => {
    return(`<h3>${date}</h3>`)
  }

  const App = ({ state }) => {
    const { date } = state

    return(`
      <div>
        <h1>Date: ${date}</h1>
        <button
          onclick='dispatch("CHANGE_DATE")'
        >
          Change the date
        </button>
        ${Child(state)}
      </div>
    `)
  }


  const render = (store) => {
    entry.innerHTML = App(store)
  }

  const store = new Store(state, actions, render)
  window.dispatch = store.dispatch
  render(store)
})()
