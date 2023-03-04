import React, {useState} from "react";
import moment from "moment"
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Stack,
    Grid,
    FormHelperText
} from "@mui/material";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import classes from "./UserInformation.module.css";
import ReactTextField from "../../../common/TextField/ReactTextField";
import {INITIAL_MARITAL_STATUS_ARRAY, INITIAL_BLOOD_GROUP, INITIAL_BUTTON, INITIAL_GENDER_ARRAY} from "./utils";

const UserInformation = ({userInfo, setUserInfo, setActiveStep}) => {

    const [error, setError] = useState();

    const handleChange = (target) => {
        const {name, value} = target;
        setUserInfo(pre => ({...pre, [name]: value}));
        setError(pre => ({...pre, [name]: !value}))
    };

    const handleBirthday = (date, i) => {
        setUserInfo(pre => ({...pre, birthday: moment(date.$d).format("MM/DD/YYYY")}));
        setError(pre => ({...pre, birthday: false}))
    };

    const checkIsRequired = () => {
        for (let key in userInfo) {
            if (userInfo[key] === '') {
                setError(pre => ({...pre, [key]: true}))
            } else {
                setError(pre => ({...pre, [key]: false}))
            }
        }
    };

    const handleButton = (buttonName) => {
        if (buttonName === 'Next') {
            checkIsRequired();
            if (Object.values(userInfo).every(e => e !== "")) {
                setActiveStep(pre => 1)
            }
        }
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ReactTextField
                        error={error?.firstName}
                        helperText={'FirstName is required field'}
                        label={'First Name'}
                        value={userInfo?.firstName}
                        name={'firstName'}
                        handleChange={handleChange}/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ReactTextField
                        error={error?.middleName}
                        helperText={'MiddleName is required field'}
                        label={'Middle Name'}
                        value={userInfo?.middleName}
                        name={'middleName'}
                        handleChange={handleChange}/>

                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ReactTextField
                        error={error?.lastName}
                        helperText={'LastName is required field'}
                        label={'Last Name'}
                        value={userInfo?.lastName}
                        name={'lastName'}
                        handleChange={handleChange}/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ReactTextField
                        error={error?.mobileNo}
                        type={'number'}
                        helperText={'MobileNo is required field'}
                        label={'Mobile No'}
                        value={userInfo?.mobileNo}
                        name={'mobileNo'}
                        handleChange={handleChange}/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ReactTextField
                        error={error?.email}
                        helperText={'Email is required field'}
                        label={'Email'}
                        value={userInfo?.email}
                        name={'email'}
                        handleChange={handleChange}/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <FormControl fullWidth error={error?.birthday}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Birthday"
                                inputFormat="MM/DD/YYYY"
                                value={userInfo?.birthday ? userInfo?.birthday : null}
                                onChange={handleBirthday}
                                renderInput={(params) => <TextField
                                    {...params}
                                    error={error?.birthday}
                                    helperText={error?.birthday && 'Birthday is required field'}/>}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ReactTextField
                        error={error?.age}
                        helperText={'Age is required field'}
                        label={'Age'}
                        type={'number'}
                        value={userInfo?.age}
                        name={'age'}
                        handleChange={handleChange}/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <FormControl fullWidth error={error?.bloodGroup}>
                        <InputLabel id="select-label">Blood Group</InputLabel>
                        <Select
                            labelId="select-label"
                            label="Blood Group"
                            name={'bloodGroup'}
                            value={userInfo?.bloodGroup}
                            onChange={({target}) => handleChange(target)}
                        >
                            {(INITIAL_BLOOD_GROUP || []).map((v, index) =>
                                <MenuItem key={index} value={v.name}>
                                    {v.name}
                                </MenuItem>)}
                        </Select>
                        {error?.bloodGroup && <FormHelperText>Blood Group is required field</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ReactTextField
                        error={error?.height}
                        helperText={'Height is required field'}
                        label={'Height'}
                        value={userInfo?.height}
                        name={'height'}
                        type={'number'}
                        handleChange={handleChange}/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ReactTextField
                        error={error?.weight}
                        helperText={'Height is required field'}
                        label={'Weight'}
                        value={userInfo?.weight}
                        name={'weight'}
                        type={'number'}
                        handleChange={handleChange}/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <FormControl error={error?.gender}>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row name={'gender'} value={userInfo?.gender}
                                    onChange={({target}) => handleChange(target)}>
                            {(INITIAL_GENDER_ARRAY || []).map((value, index) =>
                                <FormControlLabel key={index} value={value.label} control={<Radio/>}
                                                  label={value.label}/>)}
                        </RadioGroup>
                        {error?.gender && <FormHelperText>Marital Status is required field</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <FormControl error={error?.maritalStatus}>
                        <FormLabel>Marital Status</FormLabel>
                        <RadioGroup row name={'maritalStatus'} value={userInfo?.maritalStatus}
                                    onChange={({target}) => handleChange(target)}>
                            {(INITIAL_MARITAL_STATUS_ARRAY || []).map((value, index) =>
                                <FormControlLabel key={index} value={value.label} control={<Radio/>}
                                                  label={value.label}/>)}
                        </RadioGroup>
                        {error?.maritalStatus && <FormHelperText>Marital Status is required field</FormHelperText>}
                    </FormControl>
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
export default UserInformation;
