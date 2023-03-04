import React, {useEffect, useState} from "react";
import {Stack, Divider} from "@mui/material";
import classes from "./DataAdded.module.css";

const DataAdded = ({userData}) => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const data = Object.entries(userData).map((e) => ({[e[0]]: e[1]}));
        setRows(() => data.map((v, i) => ({
            name: Object.keys(v)[0],
            value: Object.values(v)[0],
        })));
    }, [userData]);

    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <>
            <Stack className={classes.dataAddedTitle}>
                Data added successfully
            </Stack>
            <Stack>
                <>
                    <Stack className={classes.row}>
                        <Stack className={classes.name}>
                            Name
                        </Stack>
                        <Stack className={classes.name}>
                            Value
                        </Stack>
                    </Stack>
                    <Divider/>
                </>
                {(rows || []).map(({value, name}, index) => (
                    <React.Fragment key={index}>
                        <Stack className={classes.row}>
                            <Stack className={classes.name}>
                                {capitalizeFirstLetter(name)}
                            </Stack>
                            <Stack className={classes.name}>
                                {value}
                            </Stack>
                        </Stack>
                        <Divider/>
                    </React.Fragment>
                ))}
            </Stack>
        </>
    )
};
export default DataAdded;
