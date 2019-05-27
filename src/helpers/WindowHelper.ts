export function getFromWindow(entityName) {
    let response = null;

    // @ts-ignore
    if (!!window.__DATA__) {
        // @ts-ignore
        response = window.__DATA__[entityName];
    }

    return response;
}

export function setToWindow(entityName, data) {
    // @ts-ignore
    window.__DATA__[entityName] = data;
}

export default {getFromWindow, setToWindow}

