import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

const Example = ({ contact}) => {
  return (
    <div className="contact-card">
      <Card>
        <CardImg top width="100%" src="" alt="" />
        <CardBody>
          <CardTitle>{contact.name}</CardTitle>
          <CardSubtitle>{contact.email}</CardSubtitle>
          <CardText>{contact.phone}</CardText>
          <Link to= {`/Posts/${contact.id}`}>
            <Button>Button</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
