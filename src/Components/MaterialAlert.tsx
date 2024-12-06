import { Alert, Snackbar } from "@mui/material";


interface MaterialAlertProps { 
    snackbar: {
    open: boolean,
    message: string,
    severity: 'success' | 'error' | 'warning' | 'info'
}
handleCloseSnackbar: () => void;
}



export default function MaterialAlert({ snackbar, handleCloseSnackbar }: MaterialAlertProps) {
    return (
        <Snackbar
            open={snackbar.open}
            autoHideDuration={5000}
            onClose={handleCloseSnackbar}
            sx={{ width: '50%' }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="filled">
                {snackbar.message}
            </Alert>
        </Snackbar>
)
}