// Função para ordenar o array usando o algoritmo de ordenação quicksort
function quicksort(arr, left, right) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, right);
    }
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    
    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    
    swap(arr, i + 1, right);
    return i + 1;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Função para busca binária
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Valor não encontrado
}

// Array original
const arrayToSearch = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

// Ordenar o array usando quicksort
quicksort(arrayToSearch, 0, arrayToSearch.length - 1);

// Realizar a busca binária
const targetValue = 20;
const index = binarySearch(arrayToSearch, targetValue);

if (index !== -1) {
    console.log(`O valor ${targetValue} foi encontrado no índice ${index}.`);
} else {
    console.log(`O valor ${targetValue} não foi encontrado no array.`);
}
