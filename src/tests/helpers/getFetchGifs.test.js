const { getFetchGifs } = require("../../helpers/getFetchGifs");
import '@testing-library/jest-dom'

describe('Pruebas con getFetchGifs', () => {
    test('debe traer 10 elementos', async() => {
        const gifs = await getFetchGifs('Javascript');

        expect(gifs.length).toBe(10);
    })
    test('debe traer 0 elementos', async() => {
        const gifs = await getFetchGifs('');

        expect(gifs.length).toBe(0);
    })
    
    
})
