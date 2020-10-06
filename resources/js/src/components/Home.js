import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <section className="container">
            <div class="card">
                <div class="card-header">CRUD</div>
                <div class="card-body">
                    <Link to="/add" class="btn btn-primary">Go somewhere</Link>
                   <div className="table-responsive">
                       <table className="table table-striped" mt-4>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Descreption</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Sample Title</td>
                                    <td>Sample Descreption</td>
                                    <td>
                                        <a href="#" className="btn btn-warning">EDIT</a>
                                        <a href="#" className="btn btn-danger">DELETE</a>
                                    </td>
                                </tr>
                            </tbody>
                       </table>
                   </div>
                </div>
            </div>
        </section> 
    );
};

export default Home;