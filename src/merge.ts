export default function merge(
    collection_1: number[],
    collection_2: number[]
): number[] {
    let i = 0;
    let j = 0;
    const merge_array = [];

    while (i < collection_1.length && j < collection_2.length) {
        console.log(collection_1[i], collection_1[j]);
        if (collection_1[i] <= collection_2[j]) {
            merge_array.push(collection_1[i]);
            i++;
        } else if (collection_1[i] > collection_2[j]) {
            merge_array.push(collection_2[j]);
            j++;
        }
    }

    while (i < collection_1.length) {
        merge_array.push(collection_1[i]);
        i++;
    }

    while (j < collection_2.length) {
        merge_array.push(collection_2[j]);
        j++;
    }

    return merge_array;
}
