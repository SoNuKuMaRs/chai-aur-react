import React, { Fragment } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';

export const Home = () => {
  return (
    <Fragment>
        <div style={{margin:"10rem"}}>
            <table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Design
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees && Employees.length > 0 
                        ? 
                        Employees.map((item)) => {
                            return
                        }
                    }
                </tbody>
            </table>

        </div>
    </Fragment>
  )
}

export default Home;
