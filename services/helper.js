import { S3_BASE_URL } from "./const";

export const setLocalStorage = (key, value) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}

export const getLocalStorage = (key) => {
    let value = null;
    if (typeof window !== 'undefined') {
        value = window.localStorage.getItem(key);
    }
    return JSON.parse(value);
}

export const getS3Url = (url) => {
    const s3url = `${S3_BASE_URL}/${url}`;
    return s3url;
}
