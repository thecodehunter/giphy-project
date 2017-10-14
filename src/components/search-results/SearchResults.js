import React from 'react';
import { GridList, GridListTile } from 'material-ui/GridList';
import './SearchResults.css';

const Gif = (props) => {
    return (
        <GridListTile cols={3}>
            <img src={props.images.preview_gif.url} alt="" />
        </GridListTile>
    );
};

class SearchResults extends React.Component {

    render() {
        return (
            <div className="root">
                <GridList cellHeight={200} spacing={1} className="gridList" cols={3}>
                    {this.props.results.map((result, i) => <Gif key={i} {...result}/>)}
                </GridList>
            </div>
        );
    }
};

export default SearchResults;
