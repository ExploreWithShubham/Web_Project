import React from "react";

const Search = () => {
    return (
        <main>
            <h1>Search Component</h1>
            <form className="search-form">
                <label htmlFor="search"></label>
                <input type="text" id="search" name="name" required placeholder="Type to write a TODO List......." />

                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default Search;