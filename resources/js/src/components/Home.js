import React from 'react';

const Home = () => {
    return(
        <section className="container">
            <div class="card">
                <div class="card-header">CRUD</div>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                   <div className="table-responsive">
                       <table className="table table-striped" mt-4>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Descreption</th>
                                </tr>
                            </thead>
                       </table>
                   </div>
                </div>
            </div>
        </section> 
    );
};

export default Home;