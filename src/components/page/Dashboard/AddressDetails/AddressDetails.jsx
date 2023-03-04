import React, {useState} from "react";
import {Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Stack} from "@mui/material";
import {ReactTextField} from "../../../common/TextField";
import classes from "./AddressDetails.module.css";
import {INITIAL_CITY, INITIAL_BUTTON, INITIAL_COUNTRY, INITIAL_STATE} from "./utils";

const AddressDetails = ({addressDetails, setAddressDetails, setActiveStep}) => {

    const [error, setError] = useState();

    const handleChange = (target) => {
        const {name, value} = target;
        setAddressDetails(pre => ({...pre, [name]: value}));
        setError(pre => ({...pre, [name]: !value}))
    };
    //
    const checkIsRequired = () => {
        for (let key in addressDetails) {
            if (addressDetails[key] === '') {
                setError(pre => ({...pre, [key]: true}))
            } else {
                setError(pre => ({...pre, [key]: false}))
            }
        }
    };

    const handleButton = (buttonName) => {
        if (buttonName === 'Next') {
            checkIsRequired();
            if (Object.values(addressDetails).every(e => e !== "")) {
                setActiveStep(pre => 2)
            }
        } else if (buttonName === 'Back') {
            setActiveStep(pre => 0)
        }
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ReactTextField error={error?.addressLine1} helperText={'Address Line 1 is required field'}
                                    label={'Address Line 1'} value={addressDetails?.addressLine1} name={'addressLine1'}
                                    handleChange={handleChange}/>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ReactTextField error={error?.addressLine2} helperText={'Address Line 2 is required field'}
                                    label={'Address Line 2'} value={addressDetails?.addressLine2} name={'addressLine2'}
                                    handleChange={handleChange}/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <FormControl fullWidth error={error?.city}>
                        <InputLabel id="select-label">City</InputLabel>
                        <Select
                            labelId="select-label"
                            label="City"
                            name={'city'}
                            value={addressDetails?.city}
                            onChange={({target}) => handleChange(target)}
                        >
                            {(INITIAL_CITY || []).map((v, index) =>
                                <MenuItem key={index} value={v.name}>
                                    {v.name}
                                </MenuItem>)}
                        </Select>
                        {error?.city && <FormHelperText>City is required field</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <FormControl fullWidth error={error?.state}>
                        <InputLabel id="select-label">State</InputLabel>
                        <Select
                            labelId="select-label"
                            label="State"
                            name={'state'}
                            value={addressDetails?.state}
                            onChange={({target}) => handleChange(target)}
                        >
                            {(INITIAL_STATE || []).map((v, index) =>
                                <MenuItem key={index} value={v.name}>
                                    {v.name}
                                </MenuItem>)}
                        </Select>
                        {error?.state && <FormHelperText>State is required field</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <FormControl fullWidth error={error?.country}>
                        <InputLabel id="select-label">Country</InputLabel>
                        <Select
                            labelId="select-label"
                            label="Country"
                            name={'country'}
                            value={addressDetails?.country}
                            onChange={({target}) => handleChange(target)}
                        >
                            {(INITIAL_COUNTRY || []).map((v, index) =>
                                <MenuItem key={index} value={v.name}>
                                    {v.name}
                                </MenuItem>)}
                        </Select>
                        {error?.country && <FormHelperText>Country is required field</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ReactTextField
                        error={error?.pinCode}
                        helperText={'Pin Code Line 1 is required field'}
                        label={'Pin Code'}
                        type={'number'}
                        value={addressDetails?.pinCode}
                        name={'pinCode'}
                        handleChange={handleChange}/>
                </Grid>
            </Grid>

            <Stack className={classes.buttons}>
                {(INITIAL_BUTTON || []).map((value, index) => (
                    <Button key={index} disabled={value.disable} variant="contained"
                            onClick={() => handleButton(value.name)}> {value.name} </Button>))}
            </Stack>
        </>
    )
};
export default AddressDetails;
