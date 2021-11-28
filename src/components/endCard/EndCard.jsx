import React from 'react'
import {
    Row,
    Col,
    Form,
    Card
} from "react-bootstrap";
import TextFieldFloat from "../InputField/TextFieldFloat";
import OnlyFieldFloat from "../InputField/OnlyFieldFloat";

export default function EndCard() {
    return (
        <Card>
            <Card.Header className="text-light text-center" style={{ backgroundColor: "indigo" }}>
            <h4 className="card-title">PART – D: ADDITIONAL INFORMATION OF FOREIGN NATIONAL</h4>
            </Card.Header>
            <Card.Body className="text-start">
                <TextFieldFloat type="text" name="foreign_nationality" placeholder="Nationality" label="Nationality"/>
                <Row className="mb-2">
                    <Col sm={5} md={5}>
                        <Form.Label className="fw-bold">Passport / Travel Document:</Form.Label>
                    </Col>
                    <Col sm={6} md={6}></Col>
                </Row>
                <Row>
                    <Col sm={4} md={4}>
                        <OnlyFieldFloat type="text" name="passport_number" placeholder="Nationality" label="Number"/>
                    </Col>
                    <Col sm={4} md={4}>
                        <OnlyFieldFloat type="date" name="place_issue" placeholder="Place of Issue" label="Place of Issue"/>
                    </Col>
                    <Col sm={4} md={4}>
                        <OnlyFieldFloat type="date" name="expiry_date" placeholder="Expiry Date" label="Expiry Date"/>
                    </Col>
                </Row>

                <Row className="mb-2">
                    <Col sm={5} md={5}>
                        <Form.Label className="fw-bold">Visa:</Form.Label>
                    </Col>
                    <Col sm={6} md={6}></Col>
                </Row>
                <Row>
                    <Col sm={4} md={4}>
                        <OnlyFieldFloat type="text" name="type_visa" placeholder="Expiry Date" label="Type of Visa"/>
                    </Col>
                    <Col sm={4} md={4}>
                        <OnlyFieldFloat type="date" name="validity_visa" placeholder="Validity of Visa(Expiry Date)" label="Validity of Visa (Expiry Date)"/>
                    </Col>
                    <Col sm={4} md={4}>
                        <OnlyFieldFloat type="text" name="visa_number" placeholder="Visa Number" label="Visa Number"/>
                    </Col>
                </Row>

                <Row className="mb-2">
                    <Col sm={5} md={5}>
                        <Form.Label className="fw-bold">Work Permit:</Form.Label>
                    </Col>
                    <Col sm={6} md={6}></Col>
                </Row>
                <Row>
                    <Col sm={6} md={6}>
                        <OnlyFieldFloat type="text" name="work_permit_number" placeholder="Number" label="Number"/>
                    </Col>
                    <Col sm={6} md={6}>
                        <OnlyFieldFloat type="text" name="validity_work_permit" placeholder="Validity of Work Permit" label="Validity of Work Permit"/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
