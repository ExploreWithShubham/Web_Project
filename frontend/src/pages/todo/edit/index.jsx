// Update TODO

import { useImperativeHandle } from "react";
import { useParams } from "react-router-dom";

const UpdateTodo = ()=> {
    const {id} = useParams ();
    console.log(id);
    return (
        <h1>UPDATE-TODO</h1>
    );
}

export default UpdateTodo;