import React from 'react'
import { Form, FloatingLabel, Row, Col } from "react-bootstrap";
import { ErrorMessage, useField } from 'formik';

export default function LabelSelectFloat({label, options, ...props}) {
    const [field, meta] = useField(props);
    return (
        <Row className="mb-3">
            <Col sm={5} md={5} className="mt-2">
                <Form.Label className="fw-bold text-start">{label}:</Form.Label>
            </Col>
            <Col sm={6} md={6} className="text-center">
                <FloatingLabel controlId={field.name} label={label}>
                    <Form.Select className={`${meta.touched && meta.error && 'is-invalid'}`}
                        {...field} {...props}>
                        {
                            options.map(c => <option key={c.value} value={c.value}>{c.label}</option>)
                        }
                    </Form.Select>
                    <ErrorMessage component="div" name={field.name} className="invalid-feedback text-danger"/>
                </FloatingLabel>
            </Col>
        </Row>
    )
}
