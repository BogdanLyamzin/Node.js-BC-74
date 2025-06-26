import { sortList } from '../constants/index.js';

export const parseSortParams = ({ sortOrder, sortBy }, sortFields) => {
  const parsedSortOrder = sortList.includes(sortOrder)
    ? sortOrder
    : sortList[0];

    const parsedSortBy = sortFields.includes(sortBy) ? sortBy : sortFields[0];

    return {
        sortOrder: parsedSortOrder,
        sortBy: parsedSortBy,
    };
};
