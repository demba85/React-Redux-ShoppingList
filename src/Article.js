 import React from 'react';
 import './index.css';

 class Article extends React.Component {
     state = { isInEditMode: false };

     toggleEditMode = () => {
         this.setState({ isInEditMode: !this.state.isInEditMode });
     }

     handleQuantityEdit = (event, article) => {
         article.quantity = event.target.value;
         this.props.editArticle(article);
     }
     handleNameEdit = (event, article) => {
         article.name = event.target.value;
         this.props.editArticle(article);
     }

     render() {
         return (
             <div>
                 <button className="btn btn-warning btn-xs edit" onClick={ () => this.toggleEditMode() }>modif</button>
                                 {
                     this.state.isInEditMode ? <span>
                                                 <input type="number" value={this.props.data.quantity}
                                                  onChange={(event) => this.handleQuantityEdit(event, this.props.data)} />
                                                 <input type="text" value={this.props.data.name}
                                                  onChange={(event) => this.handleNameEdit(event, this.props.data)} />
                                               </span> : <span>{this.props.data.quantity} {this.props.data.name}</span>
                 }
             </div>
         );
     };
 }

  

 export default Article;


// import React from 'react';

// class Article extends React.Component {
//     state = { isInEditMode: false }

//      handleRemove = (articleId) => {
//           if (confirm('Voulez-vous vous supprimer ?')) {
//              this.props.removeArticle(articleId);
//           }
//      }

//     editArticle = (article) => {
//         this.setState({ isInEditMode: !this.state.isInEditMode });
//     }

//     handleQuantityEdit = (event, article) => {
//         event.preventDefault();
//         article.quantity = event.target.value;
//         this.props.editArticle(article);
//     }

//     handleNameEdit = (event, article) => {
//         event.preventDefault();
//         article.name = event.target.value;
//         this.props.editArticle(article)
//     }

//     render() {
//         const { article } = this.props;
//         return (
//             <div>
//                 <div key={article.id}>
//                     <button className="btn btn-warning btn-xs edit" onClick={() => this.editArticle(article)}>modif</button>
//                     <button className="btn btn-danger btn-xs suppr" onClick={() => this.handleRemove(article.id)}>suppr</button>
//                     {
//                         this.state.isInEditMode ?
//                             <span>
//                                 <input type="number" value={article.quantity}
//                                     onChange={(event) => this.handleQuantityEdit(event, article)} />
//                                 <input type="text" value={article.name}
//                                     onChange={(event) => this.handleNameEdit(event, article)} />
//                             </span>

//                             : <span>{article.quantity} {article.name}</span>
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// export default Article;
