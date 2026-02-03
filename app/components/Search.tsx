"use client"
import React, { useState } from 'react';

interface ISearch { // props from /app/albums/layout.tsx
    onSearch: (term: string) => void;
}

const SearchBar = ({ onSearch }: ISearch) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchTerm.trim() !== '') {
            onSearch(searchTerm);
        }
    };

    return (
        <>
            <div className='flex flex-col flex-wrap'>

                <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
                    
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            value={searchTerm}
                            onChange={handleInputChange}
                            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', background: '#eed' }}
                        />
                    
                    
                        <button
                            type="submit"
                            style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#8f716a', color: 'white', border: 'none' }}
                        >
                            Rechercher
                        </button>

                    
                </form>

            </div >
        </>
    );
};

export default SearchBar;
