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
  <div className="form-group">
      <label htmlFor="name">Place Name</label>
      <input 
        className="form-control" 
        id="name" 
        name="name" 
        value={data.place.name} 
      required />
  </div>
  ...
</form>






          </main>
        </Def>
    )
}

module.exports = show

