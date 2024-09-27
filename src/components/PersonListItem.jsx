import { Button, Card, Col, Image } from "react-bootstrap";
import "./PersonListItem.css";
import { useContext, useRef, useState } from "react";
import PersonListContext from "../contexts/personListContext";

const PersonListItem = () => {
    const personListItem = useContext(PersonListContext);
    const cardElement = useRef();
    const [isChoose, setIsChoose] = useState(false);

    const choosePerson = () => {
        cardElement.current.classList.toggle('active');
        setIsChoose(prevState => !prevState);
    };



    return (
        <Col xs={12} lg={4} xl={3} xxl={2} className="mb-3">
            <Card ref={cardElement}>
                <Image src={personListItem.picture.large} thumbnail />
                <Card.Body>
                    <Card.Title>
                        <h3><strong>İsim:</strong> {personListItem.name.first}</h3>
                        <h3><strong>Soyisim:</strong> {personListItem.name.last}</h3>
                    </Card.Title>
                    <Card.Text>
                        <strong>Email Adres:</strong> {personListItem.email}
                    </Card.Text>
                    <Button variant={isChoose ? "success" : "danger"} className="w-100" onClick={choosePerson}>
                        {isChoose ? "Seçildi" : "Seçiniz"}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PersonListItem;
