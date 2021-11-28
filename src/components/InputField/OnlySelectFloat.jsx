import React from 'react'
import { Form, FloatingLabel } from "react-bootstrap";
import { ErrorMessage, useField } from 'formik';
export default function OnlySelectFloat({label, options, ...props}) {
    const [field, meta] = useField(props);
    return (
        <div>
            <FloatingLabel controlId={field.name} label={label}>
                <Form.Select className={`${meta.touched && meta.error && 'is-invalid'}`}
                    {...field} {...props}>
                    {
                        options.map(c => <option key={c.value} value={c.value}>{c.label}</option>)
                    }
                </Form.Select>
                <ErrorMessage component="div" name={field.name} className="invalid-feedback text-danger" />
            </FloatingLabel>
        </div>
    )
}
