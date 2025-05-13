
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0, 
        dislike: 0,
        handleLike: () => {
        this.setState((prevState) => {
            likes: prevState.likes+1;
        });
        },
        handleDislike: () => {
            this.setState((prevState) => {
                dislike: prevState.dislike+1;
            });
        },
    };

  }
  
  render() {
    return (
     <>
        <div className='content-rating'>
            <p>React is mostly used framework for front-end devlopment and it's most popular now days</p>
            <div className='rating-buttons'>
                <button className='like-button' onClick={this.state.handleLike}>
                    Like ({this.state.likes})
                </button>
                <button className='dislike-button' onClick={this.state.handleDislike}>
                    Dislike ({this.state.likes})
                </button>
            </div>
        </div>
     </>
    );
  }
}

export default ContentRating;
