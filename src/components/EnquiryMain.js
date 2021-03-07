import { makeStyles, TextField } from '@material-ui/core';
import { Height } from '@material-ui/icons';
import React from 'react'
import DatePickers from './DatePickers'
import EnquiryTextField from './EnquiryTextField'


const useStyles = makeStyles((theme) => ({
    enquiryContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [theme.breakpoints.up("sm")]: {
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-evenly'
        },
    },
    enquiryDiv: {
        border: '1px solid #d2d2d2',
        margin: 20,
        height: 60,
        [theme.breakpoints.up("sm")]: {
            width: 300
        }
    },
    enquiryButton: {
        border: 0,
        color: 'black',
        backgroundColor: '#e4beb6',
        width: '100%',
        height: '100%',
        fontWeight: 'bold'
    },
    enquiryHeading: {
        display: 'flex',
        height: 'auto',
        margin: '20px 20px 0px 20px',
        border: 'none',
        color: 'brown'
    }

  }));

function EnquiryMain() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.enquiryHeading} > 
                Looking for Vacation Packages ?
            </div>
            <div className={classes.enquiryContainer}> 
                <div className={classes.enquiryDiv} > 
                    <DatePickers label="Check In"/>
                </div>
                <div className={classes.enquiryDiv} > 
                    <DatePickers label="Check Out"/>
                </div>
                <div className={classes.enquiryDiv}> 
                    <EnquiryTextField id="standard-basic" label="Number of Guests" />
                </div>
                <div className={classes.enquiryDiv}> 
                    <button className={classes.enquiryButton}>MAKE ENQUIRY</button>
                </div>
            </div>
        </div>
    )
}

export default EnquiryMain;
