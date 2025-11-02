import fs from 'node:fs';
import readline from 'node:readline';

/**
 * The function reads the contents of the file
 * into a single string
 * @param {string} path, where the file lives
 * @return {string}, a single string return which 
 *  is the content of the file 
 */
export async function readFile(path) {
    let resultString = '';
    const file = fs.createReadStream(path);
    const rl = readline.createInterface({
        input: file
    });

    for await(const line of rl) {
        resultString += line + '\n';
    }

    return resultString;
}


/**
 * wordSearch function
 * 
 * @param lines - string that is likely 
 *  to contain multiple words
 * @param words - array that contains words that could
 *  exist in lines
 * 
 * @return result, Map, key is the word and the
 *  value is an array of line numbers
 * 
 */
export function wordSearch(lines, words) {
    //4.
    let wordmap = new Map();

    //1.
    let separateLines = lines.split('\n');

    //2 and 3
    for(let i = 0; i < separateLines.length; i++) {
        
        //2. 
        const lineWords = separateLines[i].split(" ");
        for(let j = 0; j < lineWords.length; j++) {
            
            // Check if words[__] matches lineWords[__]
            //3. 
            for(let k = 0; k < words.length; k++) {
                if(words[k] === lineWords[j]) {
                    //4. 
                    if(wordmap.has(words[k])) {
                        const lineNos = wordmap.get(words[k]);
                        lineNos.push(i);
                    } else {
                        wordmap.set(words[k], [i])

                    }
                }
            }
        }
    }
    //5. 
    return wordmap;

}
