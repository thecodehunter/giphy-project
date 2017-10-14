/**
 * Created by martin on 30/09/2017.
 */

import React from 'react';
import SearchResults from "../search-results/SearchResults";
import GiphyService from '../../services/GiphyService';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import './Search.css';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: '',
            data: []
        }
    }

    doSearch = (e) => {
        GiphyService.search(this.state.searchInput).then((resp) => {
            this.setState({ data: resp.data});
        });
    };


    render() {
        return (
            <div className="search-wrapper">
                <Input type="text" value={this.state.searchInput}
                       onChange={(e) => this.setState({searchInput: e.target.value})}
                       placeholder="Type here to search.."></Input>
                <Button onClick={this.doSearch}>Search</Button>
                <SearchResults results={this.state.data}/>
            </div>
        );
    }
}

export default Search;