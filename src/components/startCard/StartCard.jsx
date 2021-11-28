import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import TextFieldFloat from "../InputField/TextFieldFloat";
import OnlyFieldFloat from "../InputField/OnlyFieldFloat";

export default function StartCard() {
    return (
        <Card className="mt-4">
            <Card.Header className="text-light text-center" style={{ backgroundColor: "indigo" }}>
                <Card.Title>PART – B: APPLICANTS INFORMATION</Card.Title>
            </Card.Header>
            <Card.Body className="text-start">
                <TextFieldFloat label="Email" name="email" placeholder="Email" type="email" />
                <TextFieldFloat label="Mobile No." name="mobile_no" placeholder="Mobile Number" type="number" />
                <TextFieldFloat label="Full Name" name="full_name" placeholder="Full Name" type="text" />
                <TextFieldFloat type="text" name="father_name" placeholder="Father’s Name" label="Father’s Name"/>
                <TextFieldFloat type="text" name="mother_name" placeholder="Mother’s Name" label="Mother’s Name"/>
                <TextFieldFloat type="text" name="spouse_name" placeholder="Spouse Name" label="Spouse Name"/>
                <TextFieldFloat type="text" name="nationality" placeholder="Nationality" label="Nationality"/>
                <TextFieldFloat type="text" name="national_id" placeholder="National ID Number" label="National ID Number"/>
                <TextFieldFloat type="date" name="dob" placeholder="Date of Birth" label="Date of Birth"/>
                <TextFieldFloat type="text" name="blood_group" placeholder="Blood Group" label="Blood Group"/>
                <Row className="mt-2">
                    <Col sm={3} md={3} className="mt-2">
                        <Form.Label className="fw-bold">Password:</Form.Label>
                    </Col>
                    <Col sm={4} md={4} className="text-center">
                        <OnlyFieldFloat label="Password" name="password" placeholder="Password" type="password" />
                    </Col>
                    <Col sm={4} md={4} className="text-center">
                        <OnlyFieldFloat label="Password Confirm" name="passwordConfirm" placeholder="Confirm Password" type="password" />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col sm={6} md={6}>
                        <Card>
                        <Card.Header className="text-light text-start" style={{ backgroundColor: "indigo" }}>
                            <h4 className="card-title">Permanent Address</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                            <Col sm={12} md={12}>
                                <OnlyFieldFloat type="text" name="permanent_house_no" placeholder="House No" label="House No"/>
                                <OnlyFieldFloat type="text" name="permanent_street" placeholder="Street/Road No" label="Street/Road No"/>
                                <OnlyFieldFloat type="text" name="permanent_city" placeholder="City/Town" label="City/Town"/>
                                <OnlyFieldFloat type="text" name="permanent_police_station" placeholder="Police Station" label="Police Station"/>
                                <OnlyFieldFloat type="text" name="permanent_district" placeholder="District" label="District"/>
                                <OnlyFieldFloat type="text" name="permanent_post_code" placeholder="Post Code" label="Post Code"/>
                            </Col>
                            </Row>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={6}>
                        <Card>
                        <Card.Header className="text-light text-start" style={{ backgroundColor: "rgba(67,145,233,.6)" }}>
                            <h4 className="card-title">Present Address</h4>
                            <div className="card-subtitle text-light">
                            <Form.Group className="mt-4">
                                <Form.Check
                                    name="present_check"
                                    label="Similar To Permanent Address"
                                    feedback="Your Need to check this button."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                            <Col sm={12} md={12}>
                            <OnlyFieldFloat type="text" name="present_house_no" placeholder="House No" label="House No"/>
                                <OnlyFieldFloat type="text" name="present_street" placeholder="Street/Road No" label="Street/Road No"/>
                                <OnlyFieldFloat type="text" name="present_city" placeholder="City/Town" label="City/Town"/>
                                <OnlyFieldFloat type="text" name="present_police_station" placeholder="Police Station" label="Police Station"/>
                                <OnlyFieldFloat type="text" name="present_district" placeholder="District" label="District"/>
                                <OnlyFieldFloat type="text" name="present_post_code" placeholder="Post Code" label="Post Code"/>
                            </Col>
                            </Row>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
