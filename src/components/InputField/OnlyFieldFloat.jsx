import React from 'react'
import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';
export default function OnlyFieldFloat({label, ...props}) {
    const [field, meta] = useField(props);
    return (
        <div>
            <Form.Floating className="mb-3">
                <Form.Control
                    className={`${meta.touched && meta.error && 'is-invalid'}`}
                    {...field} {...props}
                    autoComplete="off"
                />
                <label htmlFor={field.name}>{label}</label>
                <ErrorMessage component="div" name={field.name} className="invalid-feedback text-danger" />
            </Form.Floating>
        </div>
    )
}
