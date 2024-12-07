import { createContext, useContext, useEffect, useState } from "react";
import MaterialAlert from "../src/Components/MaterialAlert";
import { useTranslation } from 'react-i18next';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { darkTheme, lightTheme  } from "../src/Themes/Theme";
interface AppProviderProps {
    children: React.ReactNode;
}


interface AppContextInterface {
    ShowAlert: (message: string, severity: 'success' | 'error' | 'warning' | 'info') => void;
    snackbar: { open: boolean, message: string, severity: 'success' | 'error' | 'warning' | 'info' };
    handleCloseSnackbar: () => void;
}


const AppContext = createContext<AppContextInterface | null>(null);

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)




const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' | 'warning' | 'info' });
    const colorSchemeDark= useMediaQuery('prefers-color-scheme:dark');
   

    //i18n Tradução de linguagem 
    const {  t: translate, i18n } = useTranslation();

    function changeLanguage(lang: string) {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
    }
    
    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");

        if (storedLanguage) {
            changeLanguage(storedLanguage);
        } else {
            const navLang = navigator.language.split("-")[0];
            changeLanguage(navLang);
        }
    }, [])

    function changeLanguageInteractive()
    {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage === 'pt') {
            changeLanguage('en');
        } else if (storedLanguage === 'en') {
            changeLanguage('es');
        }else if ( storedLanguage === 'es') {
            changeLanguage('pt');
        }
    }
    //Fim i18n

    function ShowAlert(message: string, severity: 'success' | 'error' | 'warning' | 'info') {
        setSnackbar({ open: true, message, severity });
    }


    function handleCloseSnackbar() {
        setSnackbar((prev) => ({ ...prev, open: false }));
    }

  
    const sharedState = {
        ShowAlert,
        snackbar,
        handleCloseSnackbar,
        changeLanguage,
        translate,
        changeLanguageInteractive,
        supabase,
      
    };

    return (
        <AppContext.Provider value={sharedState}>
            <ThemeProvider theme={colorSchemeDark? darkTheme: lightTheme}>
            {children}
            <MaterialAlert snackbar={snackbar} handleCloseSnackbar={handleCloseSnackbar} />
            </ThemeProvider>
        </AppContext.Provider>
    );
}

interface AppContextInterface {
    translate: (key: string) => string;
    changeLanguage: (lang: string) => void
    ShowAlert: (message: string, severity: 'success' | 'error' | 'warning' | 'info') => void;
    snackbar: { open: boolean, message: string, severity: 'success' | 'error' | 'warning' | 'info' };
    handleCloseSnackbar: () => void;
    changeLanguageInteractive: () => void
    supabase: SupabaseClient;
   
    
}
// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}

export default AppProvider;
