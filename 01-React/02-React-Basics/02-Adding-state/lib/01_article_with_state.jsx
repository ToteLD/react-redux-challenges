import React, { Components } from 'react';

class Article extends Components {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };

    handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
    }
  };

  render() {
    return (
      <div className={this.state.clicked ? "article clicked" : "article"} onClick={this.handleClick}>
        <h2 className="article-title">{props.title}</h2>
        <p>{props.body}</p>
      </div>
    );
  }
};

export default Article;
