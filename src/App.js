import React from "react";
import PropTypes from "prop-types";

/* JSX & PROPS (function Component)
const foodILike = [
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
]

function Food({ name,picture,rating }){
  return( 
    <div>
      <h2>I like {name}.</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

//2번째 방법
/*function renderFood(dish){
  console.log(dish);
  return <Food name={dish.name} picture={dish.image} />
}*

function App() {
  return (
    <div>
      <h1>Hi, everyone!</h1>
      {foodILike.map(
        //1번째 방법 (key={dish.id}는 react 내부에서 기본적으로 사용하기 위한 것)
        dish => (
          <Food 
            key={dish.id} 
            name={dish.name} 
            picture={dish.image} 
            rating={dish.rating}
          /> 
        )
        
        //2번째 방법
        //renderFood
      )}
    </div>
  );
}
*/

/* Class Component */
class App extends React.Component{
  constructor(props){
    super(props);
    console.log("mounting start");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(csurrent => ({ count: csurrent.count + 1 }));
    //새로운 state와 함께 render function을 호출
  };
  minus = () => {
    this.setState(csurrent => ({ count: csurrent.count - 1 }));
  };
  componentDidMount(){
    console.log("component rendered")
  }
  componentDidUpdate(){
    console.log("just updated")
  }
  componentWillUnmount(){
    console.log("Goodbye, the end")

  }
  render(){
    console.log("rendering")
    return (
      <div>
        <h1>The nuber is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
export default App;
