import React from 'react';
import AppContainer from './AppContainer'

const Add = () => {
    return(
        <AppContainer
            title="ADD POST"
        >
            <form>
                <div className="form-gruop">
                    <label>Title</label>
                    <input className="form-control" type="text" />
                </div>
                <div className="form-gruop">
                    <label>Description</label>
                    <textarea 
                        className="form-control" 
                        type="text">
                    </textarea>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success">ADD</button>
                </div>

            </form>
        </AppContainer>
    );
};

export default Add;