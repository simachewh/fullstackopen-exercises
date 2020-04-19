import React from 'react'

const PersonForm = (props) => {
    return (
        <div>
            <form>
        <div>
          name: <input onChange={props.onNewName}/>
        </div>
        <div>
          phone: <input onChange={props.onNewPhone}/>
        </div>
        <div>
          <button type="submit" onClick={props.submitAddPersonForm}>add</button>
        </div>
      </form>
        </div>
    )
}

export default PersonForm