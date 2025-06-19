export const calcPaginationData = ({page, perPage, total})=> {
    const totalPages = Math.ceil(total / perPage);
    const hasPrevPage = page > 1;
    const hasNextPage = page < totalPages;

    return {
        totalPages,
        hasPrevPage,
        hasNextPage,
    };
};