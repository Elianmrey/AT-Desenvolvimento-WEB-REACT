import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'; 
dayjs.extend(utc);
dayjs.extend(timezone); 

export function SaveToLocalStrg<T>(key: string, item: T): void {
    const storage = window.localStorage;
    const data = JSON.stringify(item);
    storage.setItem(key, data)
}

export function GetFromLocalStrg(key: string): Array<{name: string, email: string, password: string}> | null {
    const storage = window.localStorage;
    const data = storage.getItem(key);
    return data ? JSON.parse(data) : null;
}



// eslint-disable-next-line react-refresh/only-export-components
export function adjustDateTimeForTimezone(dateString: string){
    if (!dateString) return new Date();
    const dateUTC = dayjs.utc(dateString);
    const dateInUTCMinus = dateUTC.tz('America/Sao_Paulo');
    
    return dayjs(dateInUTCMinus.format());
};