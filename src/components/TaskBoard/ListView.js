import Filters from "./Filters";
import {useState} from "react";

const ListView = (props) => {

    const renderRows =  props.tasks.map( task => {
        return (
            <tr>
                <th scope="row">{task.id}</th>
                <td>{task.title}</td>
                <td>{task.type}</td>
                <td>{task.column}</td>
            </tr>
        )
    })

    return (
        <div className="mb-5">
            <Filters />
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Type</th>
                    <th scope="col">status</th>
                </tr>
                </thead>
                <tbody>
                { renderRows }
                </tbody>
            </table>
        </div>
    )
}

export default ListView;