import React, {Component} from 'react';
import Plans from './Plans';

class App extends Component{
  state = {
    plans: [
      {id: 1, content: 'Do CZ3007 Tutorial'},
      {id: 2, content: 'Discuss MDP with groupmates'}
    ]
  }
  deletePlan = (id)=>{
    const plans = this.state.plans.filter(plan =>{
      return plan.id !== id;
    });
    this.setState({
      plans: plans
    })
  }
  render(){
    return (
      <div className="plan-app container">
        <h1 className="center pink-text">Cony's Planner</h1>
        <Plans plans={this.state.plans} deletePlan={this.deletePlan}></Plans>
      </div>
    )
  }
}
export default App;
