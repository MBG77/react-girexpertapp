import '@testing-library/jest-dom';
const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGifs } = require("../../hooks/useFetchGifs");

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe retornar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current;

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    })

    test('debe retornar un arreglo de imgs y el loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );

        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe( data.length );
        expect( loading ).toBe( false );

    })
    
    
})
