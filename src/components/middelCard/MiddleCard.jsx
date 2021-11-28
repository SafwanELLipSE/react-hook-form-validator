import React from 'react'
import { Card } from "react-bootstrap";
import TextFieldFloat from "../InputField/TextFieldFloat";
import LabelSelectFloat from '../InputField/LabelSelectFloat';

export default function MiddleCard() {
    const natureOrganization = [
        {label: "Select a Nature of Organization", value: ""},
        {label: "Commercial Air Transport", value: "commercial"},
        {label: "General Aviation", value: "general"}];
    const typeEmployment = [
        {label: "Select a Type of Employment", value: ""},
        {label: "Permanent", value: "permanent"},
        {label: "Contractual", value: "contractual"},
        {label: "Other (specify)", value: "other"}];
    const scopeOperation = [
        {label: "Select a Scope of Operation", value: ""},
        {label: "International", value: "international"},
        {label: "Domestic", value: "domestic"},
        {label: "International and domestic", value: "both"}];
    return (
        <Card className="mt-4">
            <Card.Header className="text-light text-center" style={{ backgroundColor: "indigo" }}>
                <Card.Title>PART – C: DETAILS OF EMPLOYMENT</Card.Title>
            </Card.Header>
            <Card.Body className="text-start">
                <TextFieldFloat type="text" name="organization_name" placeholder="Organization Name" label="Organization Name"/>
                <LabelSelectFloat options={natureOrganization} name="nature_organization" label="Nature of organization"/>
                <TextFieldFloat type="text" name="designation" placeholder="Designation" label="Designation"/>
                <TextFieldFloat type="text" name="current_position" placeholder="Current Position" label="Current Position"/>
                <LabelSelectFloat options={typeEmployment} name="type_employment" label="Type of Employment"/>
                <LabelSelectFloat options={scopeOperation} name="scope_operation" label="Scope of Operation"/>
            </Card.Body>
        </Card>
    )
}
