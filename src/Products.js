import React from 'react'

const Products = ({data}) => {
    return (
        <div>
            <center>
            <div className="row">
                {data.map(data =>  
                <div className="col-md-4" style={{"padding":"15px"}}>
                    <div class="card" style={{"width": "20rem","height":"30rem","padding":"5px"}}>
                    <img class="card-img-top" src={data.recipe.image} alt="Card image cap" />
                    <div class="card-body">
                    <center>
                        <h5 class="card-title">{data.recipe.label}</h5>
                        <p class="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                        <a href="#" class="btn btn-primary">Buy</a>
                        </center>
                    </div>
                    </div>
                </div>
                )}
            </div>
            </center>
            
        </div>
    )
}

export default Products