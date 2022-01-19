const generateShadess = () => {
    let r = 255;
    let b = 255;
    let g = 255;

    return (2 * r / 10, 2 * g / 10, 2 * b / 10)
}


export const generateLightColors = () => {
    var new_light_color = 'rgb(' + (Math.floor((256 - 229) * Math.random()) + 230) + ',' +
        (Math.floor((256 - 229) * Math.random()) + 230) + ',' +
        (Math.floor((256 - 229) * Math.random()) + 230) + ')';

    return new_light_color
}


export const generateDarkColors = () => {
    var new_light_color = 'rgb(' + (Math.floor((200 - 1) * Math.random()) + 230) + ',' +
        (Math.floor((200 - 1) * Math.random()) + 230) + ',' +
        (Math.floor((200 - 1) * Math.random()) + 230) + ')';

    return new_light_color
}