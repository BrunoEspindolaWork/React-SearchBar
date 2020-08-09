// Packages
import React, { useState, useEffect, useRef } from 'react';
import ApiData from './data';

// Icons
import {
  FaTimes,
  FaSearch,
  FaThumbtack
} from 'react-icons/fa';

// Styled-Components
import {
  Container,
  SearchBar,
  Input,
  Button,
  Icon,
  Filters,
  Filter,
  DataTable
} from './style';

export default (props) => {

  // Keywords
  const [keywordName, setKeywordName] = useState('');
  const [keywordList, setKeywordList] = useState([]);

  const [filteredList, setFilteredList] = useState(ApiData);
  const inputRef = useRef(null);

  function handleAddKeyword(e) {
    if (keywordName && keywordList.length < 2) {
      setKeywordList(currentFilters => [...currentFilters, keywordName]);
      setKeywordName('');
      inputRef.current.focus();
    }
  }

  function handleDeleteKeyword(componentKey) {
    const newKeywordList = [...keywordList];
    newKeywordList.splice(componentKey, 1);
    setKeywordList(newKeywordList);
  }

  function search(searchTerm) {
    const filtering = ApiData.filter(obj => (obj.name === searchTerm || obj.category === searchTerm));
    return filtering;
  }

  function isEmpty(state) {
    if (state.length == 0) {
      setFilteredList(ApiData);
    }
  }

  useEffect(() => {

    const searchResults = [];

    isEmpty(keywordList);

    keywordList.map(searchTerm => (
      search(searchTerm).map(result => searchResults.push(result))
    ));

    if (keywordList.length == 1) {
      setFilteredList(searchResults);
    }

    if (keywordList.length > 1) {
      const searchPriority = searchResults.filter((elem, index, arr) => (arr.indexOf(elem) != index));
      setFilteredList(searchPriority);
    }

  }, [keywordList]);

  return (
    <Container>
      <SearchBar>
        <Filters>
          {
            keywordList.map((keyword, index) => (
              <Filter key={index}>
                <h5>{keyword}</h5>
                <button onClick={() => handleDeleteKeyword(index)}>
                  <FaTimes />
                </button>
              </Filter>
            ))
          }
        </Filters>
        <Icon>
          <FaSearch color="#717171" />
        </Icon>
        <Input
          ref={inputRef}
          value={keywordName}
          placeholder="Search..."
          onChange={(e) => setKeywordName(e.target.value)}
        />
        <Button onClick={handleAddKeyword}>
          <FaThumbtack />
        </Button>
      </SearchBar>

      <DataTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredList.length == 0
              ? <tr><td>Sorry we couldn't find any matches!</td></tr>
              : filteredList.map((obj, index) => (
                <tr key={index}>
                  <td>{obj.name}</td>
                  <td>{obj.category}</td>
                </tr>
              ))
          }
        </tbody>
      </DataTable>
    </Container>
  )
}
