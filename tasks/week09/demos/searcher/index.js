import { wordSearch, readFile } from './search.js';


async function testWordSearch() {

    const linesExample = await readFile('./book.md');
    const searchingFor = ["bug", 'rainy'];

    let result = wordSearch(linesExample, searchingFor);

    console.log(result);
}

testWordSearch();