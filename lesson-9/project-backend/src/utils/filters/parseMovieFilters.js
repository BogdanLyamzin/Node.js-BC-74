const parseNumber = number => {
    if(typeof number !== "string") return;
    
    const value = parseInt(number);
    if(Number.isNaN(value)) return;

    return value;
};

const parseString = str => {
    if(typeof str !== "string") return;

    return str;
};

export const parseMovieFilters = ({ type, minReleaseYear, maxReleaseYear }) => {
    const parsedType = parseString(type);
    const parsedMinReleaseYear = parseNumber(minReleaseYear);
    const parsedMaxReleaseYear = parseNumber(maxReleaseYear);

    return {
        minReleaseYear: parsedMinReleaseYear,
        maxReleaseYear: parsedMaxReleaseYear,
        type: parsedType,
    };
};
