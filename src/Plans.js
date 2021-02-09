import React from 'react'

const Plans = ({plans, deletePlan}) =>{
    const plansList = plans.length ? (
        plans.map(
            plan => {
                return (
                    <div className="collection-item" key={plan.id}>
                        <span onClick={()=>{deletePlan(plan.id)}}>{plan.content}</span>
                    </div>
                ) // return
            }// plan
        )// map
    ):(
        <p className="center"> Nothing to Do!</p>
    );

    return (
        <div className="plans collection">
            {plansList}
        </div>
    )
}

export default Plans;