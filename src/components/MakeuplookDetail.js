import React from "react";
import {
  CardImg,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

function RenderMakeuplook({ makeuplook }) {
  return (
    <div>
      <CardText>{makeuplook.description}</CardText>
      <CardImg width="70%" src={makeuplook.image} alt={makeuplook.name} />
    </div>
  );
}

function RenderComments({ comments }) {
  const createdComments = comments.map((comment) => {
    return (
      <div key={comment.id}>
        <CardText>{comment.comment}</CardText>
        <CardText>
          --{comment.author}, {new Date(comment.date).toDateString()}
        </CardText>
      </div>
    );
  });
  return (
    <div>
      <CardTitle heading>
        <h3>Comments</h3>
      </CardTitle>
      <CardText>{createdComments}</CardText>
    </div>
  );
}
const MakeuplookDetail = (props) => {
  if (props.makeuplook != null) {
    return (
      <div className="container mb-3">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/portfolio">Portfolio</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.makeuplook.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.makeuplook.name}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            <RenderMakeuplook dish={props.makeuplook} />
          </div>
          <div className="col-md-6 col-12">
            <RenderComments comments={props.comments} />
            <CommentForm
              makeuplookId={props.makeuplook.id}
              addComment={props.addComment}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default MakeuplookDetail;
