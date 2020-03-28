import React, { Component } from "react";
//import { Media } from "reactstrap";
import { Card, CardImg, CardImgOverlay, 
         CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {

    constructor(props) {
        super(props);    
    }

    renderDish(dish) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    renderComment(comments) {
        if (comments != null) { 
            const all_comments = comments.map((comment) => {
                return (  
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>
                            -- {comment.author}{new Date(comment.date).toLocaleDateString("en-US", {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                            })}
                        </p>
                    </li>
                );
            });

            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {all_comments}
                    </ul>
                </div>
            )

        }
        else {
            return (<div></div>);
        }
    }

    render() {
        const dish = this.props.dish
        return (
            <div className='row'>
                {this.renderDish(dish)}
                {this.renderComment(dish.comments)}
            </div>
        );
    }
}

export default DishDetail; 