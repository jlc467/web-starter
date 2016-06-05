import React, { PropTypes } from 'react'
import * as actions from '../../actions/foodsActions'
import { connect } from 'react-redux'


const FoodListItem = ({ foodItem, onClick }) => <li onClick={onClick}>{foodItem}</li>
FoodListItem.propTypes = {
  foodItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
const FoodList = ({ foodList, eatFood }) => <ul>
  {foodList.map(f =>
    <FoodListItem
      onClick={() => eatFood(f)}
      foodItem={f}
    />)
  }
</ul>
FoodList.propTypes = {
  foodList: PropTypes.array.isRequired,
  eatFood: PropTypes.func.isRequired
}

class AddFoodInput extends React.Component {
  static propTypes = {
    addFood: PropTypes.func.isRequired
  }
  addFood = (e) => {
    e.preventDefault()
    this.props.addFood(this.refs.addFoodInput.value)
    this.refs.addFoodForm.reset()
  }
  render = () => <form ref="addFoodForm" onSubmit={this.addFood}>
    <input ref="addFoodInput" />
    <button type="submit">add</button>
  </form>
}


class FoodContainer extends React.Component {
  static propTypes = {
    food: PropTypes.array.isRequired,
    addFood: PropTypes.func.isRequired,
    eatFood: PropTypes.func.isRequired
  }

  render = () => {
    return (
      <div className="center-container">
        <div className="center-item">
          <h3>Food</h3>
          <FoodList
            foodList={this.props.food}
            eatFood={this.props.eatFood}
          />
          <AddFoodInput addFood={this.props.addFood} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    food: state.foods
  }
)

export default connect(
  mapStateToProps,
  {
    addFood: actions.addFood,
    eatFood: actions.eatFood
  }
)(FoodContainer)
