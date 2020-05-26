import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderMakeuplook({ makeuplook }) {
  return (
    <Card>
      <Link to={`/portfolio/${makeuplook.id}`}>
        <CardImg width="100%" src={makeuplook.image} alt={makeuplook.name} />
        <CardImgOverlay>
          <CardTitle>{makeuplook.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Portfolio = (props) => {
  const portfolio = props.makeuplooks.makeuplooks.map((makeuplook) => {
    return (
      <div className="col-12 col-md-4 col-lg-3 my-1" key={makeuplook.id}>
        <RenderMakeuplook makeuplook={makeuplook} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Portfolio</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Portfolio</h3>
        </div>
      </div>
      <div className="row">{portfolio}</div>
    </div>
  );
};

export default Portfolio;
