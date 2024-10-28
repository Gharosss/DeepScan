import '../assets/styles/SearchArea.css';

function SearchArea() {
    return (
        <div className='SearchArea'>
            <text id='SearchAreaText'> Search for a Phrase </text>
            <div className='SearchAreaTop'>
                <input type='text' className='InputArea' placeholder='Enter a Phrase' />
                <button className='SearchAreaButton'>Search</button>
                <button className='SearchAreaButton'>Filters</button>
            </div>
            <div className='FilterArea'>
                <div className='FileTypeArea'>
                    <div className='FileType'>.txt</div>
                    <div className='FileType'>.yml</div>
                    <div className='FileType'>.json</div>
                    <div className='FileType'>.pdf</div>
                </div>
                <div className='SortByArea'>
                    <text>Sort By:</text>
                    <select className='SelectInput'>
                        <option value='Relevance' className='SelectOption'>Relevance</option>
                        <option value='Date' className='SelectOption'>Date</option>
                        <option value='Type' className='SelectOption'>File Type</option>
                    </select>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default SearchArea;