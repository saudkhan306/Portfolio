export const appendScript = (scriptToAppend) => {
    let script = document.createElement("script");
    script.src = scriptToAppend;
    if (!scriptToAppend.includes('assets/js'))
        script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
}


export const getScriptsFiles = () => {
    return ["assets/js/main.js"];
}