import {makeStyles} from "@material-ui/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {

    }
})

const MembersList = ({members}) => {
    const classes = useStyles()

    return (<div>
        <Typography>{members.length}</Typography>
        {!members && <Typography>No members yet =(</Typography>}
        {members && members.map(m => <Typography>{m}</Typography>)}
    </div>)
}

export default React.memo(MembersList)