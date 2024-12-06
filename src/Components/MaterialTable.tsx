import { Table, TableRow, TableCell, TableBody, TableHead, Container } from "@mui/material";


interface MaterialTableProps {
    cellNames: Array<string>,
    dataBlock: Array<
        { userId: number, name: string, birthDate: string, occupation: string, experience: number, description: string } |
        { name: string, birthDate: string, occupation: string, experience: number, userId?: number, description: string }>,
    occupationRange: string,
    filter: boolean
}



export default function MaterialTable({ cellNames, dataBlock, occupationRange, filter }: MaterialTableProps) {
    return (
        filter ? (
            <Container sx={{ width: '100%', height: '100%', backgroundColor: 'indigo', minWidth: '600px', padding : '20px',borderRadius: '15px' }}>
                <Table sx={tableStyles.table}>
                    <TableHead sx={Styles}>
                <TableRow>
                    {
                        cellNames.map((cell, index) => { return (<TableCell key={index}>{cell}</TableCell>) })
                    }
                </TableRow>
            </TableHead>
                    <TableBody sx={Styles}>
                {(dataBlock.filter(data => data.occupation === occupationRange )).map((data) => (
                    <TableRow key={data.userId}>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.occupation}</TableCell>
                        <TableCell>{data.experience} anos</TableCell>
                    </TableRow>
                ))}</TableBody>
                </Table>
            </Container>)
            :
            (<Container sx={{ width: '100%', height: '100%', backgroundColor: 'indigo', padding: '20px', borderRadius: '15px' }}>
                <Table sx={tableStyles.table}>
                    <TableHead sx={Styles}>
                <TableRow>
                    {
                        cellNames.map((cell, index) => { return (<TableCell key={index}>{cell}</TableCell>) })
                    }
                </TableRow>
            </TableHead>
                    <TableBody sx={Styles}>
                    {dataBlock.map((item, index) => (<TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.birthDate}</TableCell>
                        <TableCell>{item.occupation}</TableCell>
                        <TableCell>{item.experience} anos</TableCell>
                        <TableCell>{item.description}</TableCell>
                    </TableRow >))}
                </TableBody>
                </Table>
                </Container>)
    );
}

const Styles = {
    'td, th': {
        border: 2,
        borderStyle: 'groove',
        color: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'wrap',
    },
};

const tableStyles = {
    table:  {
        minWidth: '100%',
        borderRadius: 10,
    },
};