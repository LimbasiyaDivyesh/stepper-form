import React, {useState} from "react";
import {Card, CardContent, Stack, Stepper, StepLabel, Step} from '@mui/material';
import classes from "./dashboard.module.css";
import {UserInformation} from "./UserInformation";
import {AddressDetails} from "./AddressDetails";
import {DataAdded} from "./DataAdded";

const Dashboard = () => {

    const steps = [
        'User Information',
        'Address Details',
        'Thank You',
    ];

    const [userInfo, setUserInfo] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNo: '',
        email: '',
        birthday: '',
        age: '',
        bloodGroup: '',
        height: '',
        weight: '',
        gender: '',
        maritalStatus: '',
        activeStep: 0
    });

    const [activeStep, setActiveStep] = useState(0);

    const [addressDetails, setAddressDetails] = useState({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        pinCode: '',
    });

    return (
        <>
            <Card className={classes.card}>
                <CardContent>
                    <Stack gap={'20px'}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === 0 &&
                        <UserInformation
                            setActiveStep={setActiveStep}
                            setUserInfo={setUserInfo}
                            userInfo={userInfo}
                        />}
                        {activeStep === 1 &&
                        <AddressDetails
                            setActiveStep={setActiveStep}
                            setAddressDetails={setAddressDetails}
                            addressDetails={addressDetails}
                        />}
                        {activeStep === 2 &&
                        <DataAdded
                            userData={{...userInfo, ...addressDetails}}
                        />}
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
};
export default Dashboard;
