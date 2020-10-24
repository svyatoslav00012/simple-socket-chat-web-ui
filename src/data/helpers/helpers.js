export const deepCopy = obj => JSON.parse(JSON.stringify(obj));

export const valsWithPrefix = prefix => obj => Object.entries(obj).reduce((prev, [curK, curV]) => ({
    ...prev,
    [curK]: prefix + curV
}), {});

export const uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
})