import React from 'react';

import Form from './Form';
import ItemList from './ItemList';
import { connect } from 'react-redux';

class App extends React.Component {

  state = { articles : []};

  render() {
    return (
      <div>
        <h3>List de courses</h3>
        <Form formTitle="Ajouter un article" addArticle={this.props.addArticle}/>
        <ItemList articles={this.props.articles} editArticle={this.props.editArticle}/>
      </div>
    );
  }
}//End class

const addArticleActionCreator = (article) => {
  return {
    type: 'ADD_ARTICLE',
    payload: article
  }
}

const editArticleActionCreator = (article) => {
  return {
    type: 'EDIT_ARTICLE',
    payload: article
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => {
      dispatch(addArticleActionCreator(article));
    },
    editArticle: (article) => {
      dispatch(editArticleActionCreator(article));
    }
  }
}

// export default App;

export default connect(mapStateToProps, mapDispatchToProps)(App);
