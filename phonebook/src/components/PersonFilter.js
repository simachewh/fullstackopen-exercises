import React from 'react'

const PersonFilter = (props) => {
    return(
        <div>
            <form>
        <div>
          Filter with: <input onChange={props.onSearch}/>
        </div>
      </form>
        </div>
    )
}
export default PersonFilter