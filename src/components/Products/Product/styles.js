import { CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        penddingTop: '56.25%',
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    CardContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },

}));