import React from 'react'
import { ErrorMessage, useField } from 'formik';
import { Row, Col, Form } from 'react-bootstrap';

export default function TextFieldFloat({label, ...props}) {
    const [field, meta] = useField(props);
    return (
        <Row className="">
            <Col sm={5} md={5} className="mt-2">
                <Form.Label className="fw-bold">{label}:</Form.Label>
            </Col>
            <Col sm={6} md={6} className="text-center">
                <Form.Floating className="mb-3">
                    <Form.Control className={`${meta.touched && meta.error && 'is-invalid'}`}
                        {...field} {...props}
                        autoComplete="off"
                    />
                    <label htmlFor={field.name}>{label}</label>
                    <ErrorMessage component="div" name={field.name} className="invalid-feedback text-danger"/>
                </Form.Floating>
            </Col>
        </Row>
    )
}
