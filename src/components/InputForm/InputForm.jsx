import React from 'react'

const InputForm = (props) =>{
    return(
        <div>

            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter name" />
            </div>
            <div class="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter Username" />
            </div>
            <button className="btn btn-primary">Submit</button>

        </div>
    )
}

export default InputForm;