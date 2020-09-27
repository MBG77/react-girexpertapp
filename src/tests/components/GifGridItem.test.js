import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'javascript';
    const url = 'https://media0.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif?cid=fabaeeb8ziulp54a25j9ktiihtlgs86gybo5xcyurg5l9mm6&rid=giphy.gif';
    let wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
    })
    
    test('debe mostrar el componente <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un párrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        
    })

    test('debe tener la imagen igual al url y alt de los props.', () => {
        const img = wrapper.find('img');
        // console.log(img.prop('src'));
        expect( img.prop('src') ).toBe(url)
        expect( img.prop('alt') ).toBe(title);
    })

    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        
        expect( className.includes('animate__fadeIn') ).toBe( true );
    })
    
    
    
    
})
