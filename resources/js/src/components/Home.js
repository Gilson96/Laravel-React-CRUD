import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';

const Home = () => {
    return (
        <AppContainer
            title="CRUD"
            Children
        >
            <Link to="/add" class="btn btn-primary">ADD POST</Link>
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
                                <Link to="/edit/1" class="btn btn-warning">EDIT</Link>
                                <a href="#" className="btn btn-danger">DELETE</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AppContainer>

    );
};

export default Home;