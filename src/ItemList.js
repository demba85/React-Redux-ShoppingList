import React from 'react';
import Article from './Article';

const ItemList = (props) => {
    return (
        <div>
            <h3>Votre liste de cours</h3>
                <div>
                    {
                        props.articles.map(article => <Article data={article} key={article.id} editArticle={props.editArticle}/>)
                    }
                </div>
        </div>
        
    );
};

export default ItemList;