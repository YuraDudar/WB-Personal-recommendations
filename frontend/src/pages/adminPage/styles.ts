import { defaultTheme } from 'react-admin';

export default {
    ...defaultTheme,
    palette: {
        main: '#F6E6EC',
        primary: '#F6E6EC',
    },
    components: {
        ...defaultTheme.components,
        Resource: {
            styleOverrides: {
                root: {
                    backgroundColor: "Lavender",
                    "& .RaDatagrid-headerCell": {
                        backgroundColor: "MistyRose",
                    },
                }
             }
        },
    }
};