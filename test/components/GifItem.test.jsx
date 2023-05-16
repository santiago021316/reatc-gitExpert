import { render ,screen} from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";





describe('pruebas en el componente  gifItem', () => { 
    const title = 'saitana'
    const url = 'https://saitana.org/jpg'


test('debe hacer match con el snapshot', () => { 
    const {container} = render(<GifItem title={title} url={url}/>)
    expect(container).toMatchSnapshot()
    
})

test('debe mostarr la imagen con el url indicado', () => { 

    render(<GifItem title={title} url={url}/>);
    
    const {src, alt} = screen.getByRole('img')
    //  expect(screen.getByRole('img').src).toBe(url)
    //  expect(screen.getByRole('img').src).toBe(url)
     
    expect(src).toBe(url)
    expect(alt).toBe(title)
 })

 test('debe de mostrar el titulo en el componenete', () => { 
    render(<GifItem title={title} url={url}/>);
    expect(screen.getByAltText(title)).toBeTruthy()
 })

 })