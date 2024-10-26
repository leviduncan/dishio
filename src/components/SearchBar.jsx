const SearchBar = ({ handleSearch, searchQuery }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (

        <section className="search-bar py-5">
            <form className="d-flex search justify-content-center" onSubmit={handleSubmit}>
                <input
                    className="form-control mx-2"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search recipes"
                />
            </form>

        </section>
    )
}

export default SearchBar