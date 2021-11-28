import * as Yup from 'yup';
export const initialValues = {
    email: '',
    mobile_no: '',
    full_name: '',
    password: '',
    passwordConfirm: '',
    father_name: '',
    mother_name: '',
    spouse_name: '',
    nationality: '',
    national_id: '',
    dob: '',
    blood_group: '',
    permanent_house_no: '',
    permanent_street: '',
    permanent_city: '',
    permanent_police_station: '',
    permanent_district: '',
    permanent_post_code: '',
    present_house_no: '',
    present_street: '',
    present_city: '',
    present_police_station: '',
    present_district: '',
    present_post_code: '',
    present_check: '',
    type_pass:'',
    type_issue: '',
    pass_number: '',
    color_card: '',
    GD_number: '',
    date_entry: '',
    police_station_name: '',
    profile_image: '',
    nature_organization: '',
    organization_name: '',
    designation: '',
    current_position: '',
    scope_operation: '',
    type_employment: '',
    foreign_nationality: '',
    passport_number: '',
    place_issue: '',
    expiry_date: '',
    type_visa: '',
    validity_visa: '',
    visa_number: '',
    work_permit_number: '',
    validity_work_permit: '',
    terms: false,
};

export const validCondition = {
    mobile_no: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .matches(/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/, { message: "Mobile number is not valid", excludeEmptyString: true })
        .required('Required'),
    full_name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Email is invalid')
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        { message: "Email is not valid", excludeEmptyString: true })
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    father_name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    mother_name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    spouse_name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    nationality: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    national_id:  Yup.number('Must be numbers')
        .lessThan(20, 'Must be 20 characters or less')
        .required('Required')
        .positive('Must be positive numbers')
        .integer('Must be integer numbers'),
    dob: Yup.date()
        .required('Required'),
    blood_group: Yup.string()
        .matches(/(A|B|AB|O)[+-]/, { message: "Blood Group is not valid", excludeEmptyString: true })
        .required('Required'),
    permanent_house_no: Yup.string()
        .required('Required'),
    permanent_street: Yup.string()
        .required('Required'),
    permanent_city: Yup.string()
        .required('Required'),
    permanent_police_station: Yup.string()
        .required('Required'),
    permanent_district: Yup.string()
        .required('Required'),
    permanent_post_code: Yup.string()
        .required('Required'),
    present_house_no: Yup.string()
        .required('Required'),
    present_street: Yup.string()
        .required('Required'),
    present_city: Yup.string()
        .required('Required'),
    present_police_station: Yup.string()
        .required('Required'),
    present_district: Yup.string()
        .required('Required'),
    present_post_code: Yup.string()
        .required('Required'),
    present_check: Yup.bool()
        .required('Required')
        .oneOf([true], 'Terms must be accepted'),
    type_pass: Yup.string()
        .required('Required'),
    type_issue: Yup.string()
        .required('Required'),
    pass_number: Yup.string()
        .required('Required'),
    color_card: Yup.string()
        .required('Required'),
    GD_number: Yup.string()
        .required('Required'),
    date_entry: Yup.date()
        .required('Required'),
    police_station_name: Yup.string()
        .required('Required'),
    profile_image: Yup.string()
        .required('Required'),
    nature_organization: Yup.string()
        .required('Required'),
    organization_name: Yup.string()
        .required('Required'),
    designation: Yup.string()
        .required('Required'),
    current_position: Yup.string()
        .required('Required'),
    scope_operation: Yup.string()
        .required('Required'),
    type_employment: Yup.string()
        .required('Required'),
    foreign_nationality: Yup.string()
        .required('Required'),
    passport_number: Yup.string()
        .required('Required'),
    place_issue: Yup.date()
        .required('Required'),
    expiry_date: Yup.date()
        .required('Required'),
    type_visa: Yup.string()
        .required('Required'),
    validity_visa: Yup.date()
        .required('Required'),
    visa_number: Yup.string()
        .required('Required'),
    work_permit_number: Yup.string()
        .required('Required'),
    validity_work_permit: Yup.string()
        .required('Required'),
    terms: Yup.bool()
        .required('Required')
        .oneOf([true], 'Terms must be accepted'),
};