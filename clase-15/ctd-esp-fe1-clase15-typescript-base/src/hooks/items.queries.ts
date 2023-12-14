
export const getItemCategories = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/item-category/");
    const data = await response.json();
    return data.results;
};

export const getItemCategory = async (categoryId: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/item-category/${categoryId}`);
    const data = await response.json();
    return data;
};