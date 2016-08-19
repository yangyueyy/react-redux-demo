import React from 'react'
const Counter = React.createClass({
   render:function () {
       return <div>
         {this.props.value}
         <button onClick={this.props.onAdd}>Add</button>
       </div>
   }
});

export default Counter