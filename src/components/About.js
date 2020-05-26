import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderEmployee({ employee }) {
  return (
    <Media className="row my-3">
      <Media header className="col-lg-3 col-md-4 col-12">
        <CardImg src={employee.image} alt={employee.name} />
      </Media>
      <Media body className="col-lg-9 col-md-8 col-12">
        <Media heading>{employee.name}</Media>
        <Media>{employee.designation}</Media>
        <Media>{employee.description}</Media>
      </Media>
    </Media>
  );
}
function About(props) {
  const employees = props.employees.map((employee) => {
    return (
      <div>
        <RenderEmployee employee={employee} />
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
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            Started in 2010, TecNhiques Makeup Artistry aims to cater to your
            beauty needs for any occassion
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">3 Feb. 2013</dd>
                <dt className="col-6">Industry Connections</dt>
                <dd className="col-6">Benefit Makeup and MAC</dd>
                <dt className="col-6">Non-bridal Makeup</dt>
                <dd className="col-6">$100/hr</dd>
                <dt className="col-6">Bridal Makeup</dt>
                <dd className="col-6">$150/hr</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  You better cut the pizza in four pieces because I'm not hungry
                  enough to eat six.
                </p>
                <footer className="blockquote-footer">
                  Yogi Berra,
                  <cite title="Source Title">
                    The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books,
                    2014
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Who are we?</h2>
        </div>
        <div className="col-12">
          <Media list>{employees}</Media>
        </div>
      </div>
    </div>
  );
}

export default About;
