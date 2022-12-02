import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    // this references the actual class component itself
    // props will log out all of the props that you have passed this component inside of an object
    // console.log(this.props) <= logged twice. Why? React re-renders whenever props change and setState gets called
    // If there were another component in this CardList component, it will be the child component of this CardList component and
    // This is the way of making component tree
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          // destructuring again
          return (
            <div className="card-container" key={id}>
              <img
                alt={`${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
