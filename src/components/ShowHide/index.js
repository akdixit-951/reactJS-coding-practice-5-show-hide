import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {isFirstNameShown: false, isLastNameShown: false}

  showHideFirstName = () => {
    this.setState(prevState => ({
      isFirstNameShown: !prevState.isFirstNameShown,
    }))
  }

  showHideLastName = () => {
    this.setState(prevState => ({
      isLastNameShown: !prevState.isLastNameShown,
    }))
  }

  render() {
    const {isFirstNameShown} = this.state
    const {isLastNameShown} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-con">
          <div className="name-con">
            <button
              type="button"
              className="button"
              onClick={this.showHideFirstName}
            >
              Show/Hide FirstName
            </button>
            {isFirstNameShown ? <p className="name">Joe</p> : null}
          </div>
          <div className="name-con">
            <button
              type="button"
              className="button"
              onClick={this.showHideLastName}
            >
              Show/Hide LastName
            </button>
            {isLastNameShown ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
