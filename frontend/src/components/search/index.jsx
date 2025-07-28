import React, { useState } from "react";

const Search = () => {
    const [todoText, setTodoText] = useState("");

    return (
        <div>
            <form className="search-form" onSubmit={(e) => {
                e.preventDefault();
                console.log("Submitted Todo:", todoText);
                setTodoText("");
                
}}>
                <label htmlFor="search"></label>
                <input type="text" id="search" name="name" value={todoText} onChange={(e) => setTodoText(e.target.value)} required placeholder="Type to write a TODO List......." />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Search;