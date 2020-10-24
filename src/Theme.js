import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1314ff',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#94CFCC',
            contrastText: '#FFFFFF'
        },
        text: {
            primary: '#542C2C',
            //  secondary: '#FFFFFF',
        },
        background: {
            primary: '#FFFFFF',
            secondary: '#FF6663'
        },
        lightGrey: '#C0C0C0',
    },

    overrides: {
        MuiOutlinedInput: {
            root: {
                height: props => props.height ? props.height : '',
                border: '0.41413px #C0C0C0',
                boxSizing: 'border-box',
                borderRadius: '7px',
            }
        },
        MuiPickersCalendarHeader: {
            iconButton: {
                backgroundColor: '#94CFCC',
                color: '#FFFFFF',
                width: '16px',
                height: '16px'
            },
            switchHeader: {
                color: '#FF6663',
                margin: '50px'
            },
            dayLabel: {
                width: '16px',
                margin: '0px 6px'
            }
        },
        MuiPickersBasePicker: {
            pickerView: {
                minWidth: '300px',
                minHeight: '205px',
            }
        },
        MuiPickersCalendar: {
            transitionContainer: {
                minHeight: '150px'
            }
        }
    }
});

export default theme;