import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="search-con">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              className="input"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              className="icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="list-con">
            {searchResult.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                DestinationLists={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
