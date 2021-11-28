import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {initialValues, validCondition} from "../validation/RegisterForm";
import ImageCard from '../imageCard/ImageCard';
import StartCard from '../startCard/StartCard';
import MiddleCard from '../middelCard/MiddleCard';
import EndCard from '../endCard/EndCard';

export default function FormStart() {
    const validate = Yup.object(validCondition)
    return (
        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={validate}
                onSubmit={values => {
                    // console.log(values)
                }}
            >
            {formik => (
                <div>
                    <Form onSubmit={formik.handleSubmit}>
                        <ImageCard />
                        <StartCard/>
                        <MiddleCard/>
                        <EndCard/>
                        <hr/>
                        <Row className="mb-3">
                            <Col sm={6} md={6} className="text-start">
                                <Form.Group className="mt-4">
                                <Form.Check name="terms"
                                label="Agree to terms and conditions" 
                                onChange={formik.handleChange}
                                isInvalid={!!formik.errors.terms}
                                feedback={formik.errors.terms}
                                feedbackType="invalid"/>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={6}>
                                <Button type="submit" variant="success" className="btn float-end mt-4">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            )}
            </Formik>
        </Container>
    )
}
