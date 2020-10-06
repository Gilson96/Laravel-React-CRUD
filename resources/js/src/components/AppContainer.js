import React from 'react';

const AppContainer = ({title, children}) => {
    return(
        <section className="container">
        <div class="card">
            <div class="card-header">{title}</div>
            <div class="card-body">
            </div>
        </div>
    </section> 
    );
};

export default AppContainer;