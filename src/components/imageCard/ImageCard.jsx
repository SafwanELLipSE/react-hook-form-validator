import React, {useState} from 'react'
import { Card, Form, Row, Col, Image } from "react-bootstrap";
import profileImage from "../../assets/image/default-img.jpg";
import OnlySelectFloat from '../InputField/OnlySelectFloat';
import OnlyFieldFloat from "../InputField/OnlyFieldFloat";

export default function ImageCard() {
    const [reIssue, setReIssue] = useState(false);
    const [lostIssue, setLostIssue] = useState(false);
    const [isImageUpload, setIsImageUpload] = useState(false);
    const [uploadedImage, setUploadedImage] = useState("");

    const typePass = [{label: "Select a Pass Type",value: ""},
        {label: "Permanent", value: "permanent"},
        {label: "Temporary", value: "temporary"}];
    const typeIssue = [{value: "", label: "Select a Issue Type"},
        {value: "initial", label: "Initial"},
        {value: "expired", label: "Re-issue (expired)"},
        {value: "lost-pass", label: "Re-issue (lost / stolen)"},
        {value: "company-change", label: "Re-issue (company change)"},
        {value: "designation-change", label: "Re-issue (designation change)"}];

    const handleReissue = (e) =>{
        const value = e.target.value;
        console.log(value);
        const checker = ["expired", "company-change", "designation-change"];
        (checker.indexOf(value) > -1) ? setReIssue(true): setReIssue(false);
        (value === "lost-pass") ? setLostIssue(true): setLostIssue(false);
    }

    const handleImageChange = (e) =>{
        const reader = new FileReader();
        reader.onload=(e)=>{
            setIsImageUpload(true);
            setUploadedImage(e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    return (
        <Card className="mt-4">
            <Card.Header className="text-light text-center" style={{ backgroundColor: "indigo" }}>
                <Card.Title>PART – A: APPLICATION DETAIL</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col sm={7} md={7}>
                        <OnlySelectFloat className="mb-3" 
                            name="type_pass" 
                            placeholder="Type of Pass" 
                            label="Type of Pass" 
                            options={typePass}/> 
                        <OnlySelectFloat className="mb-3"
                            onChange={e => handleReissue(e)}
                            name="type_issue" 
                            placeholder="Type of Issue" 
                            label="Type of Issue" 
                            options={typeIssue} />
                        {
                            reIssue?<Row className="mt-2">
                                <Col sm={6} md={6}>
                                    <OnlyFieldFloat type="text" name="pass_number" placeholder="Pass number" label="Pass number"/>
                                </Col>
                                <Col sm={6} md={6}>
                                    <OnlyFieldFloat type="text" name="color_card" placeholder="Color of card" label="Color of card"/>
                                </Col>
                            </Row>:null
                        }
                        {
                            lostIssue?<Row className="mt-2">
                                <Col sm={6} md={6}>
                                    <OnlyFieldFloat type="text" name="GD_number" placeholder="GD Number" label="GD Number"/>
                                </Col>
                                <Col sm={6} md={6}>
                                    <OnlyFieldFloat type="date" name="date_entry" placeholder="Date of Entry" label="Date of Entry"/>
                                </Col>
                                <Col>
                                    <OnlyFieldFloat type="text" name="police_station_name" placeholder="Police Station Name" label="Police Station Name"/>
                                </Col>
                            </Row>:null
                        }
                    </Col>
                    <Col sm={5} md={5} className="text-center">
                        <Image src={!(isImageUpload) ? profileImage: uploadedImage} className="rounded" thumbnail/>
                        <Form.Group controlId="formFileSm" name="profile_image" className="my-3 d-flex justify-content-center">
                            <Form.Control type="file" size="sm" 
                            style={{width:"70%"}} accept=".jpg,.jpeg,.gif,.png"
                            onChange={handleImageChange}/>
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
