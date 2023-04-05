const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <a href="" className="btn btn-warning"> 
  Edit
</a>  
<form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
  <div className="row">
      <div className="form-group col-sm-6">
          <label htmlFor="name">Place Name</label>
          <input id="name" ... />
      </div>
      <div className="form-group col-sm-6">
          <label htmlFor="pic">Place Picture</label>
          <input id="pic" ... />
      </div>
  </div>

  ...
</form>






          </main>
        </Def>
    )
}

module.exports = show

