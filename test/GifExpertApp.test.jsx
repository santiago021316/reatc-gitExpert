import { render ,screen} from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('pruebas en <GifExpertApp/>>', () => { 


    test('debe hacer el snatShot  de <GifExpertApp/>', () => { 

    const {container} = render(<GifExpertApp/>)
    expect(container).toMatchSnapshot()
    })

   test('debe existir el texto category en el render', () => { 

        render(<GifExpertApp/>)
        expect(screen.getByText('GifExpertApp'))
    })



    test('el length del los heading no debe ser supeior a 2 ', () => { 

      render(<GifExpertApp/>)
       expect(screen.getAllByRole('heading').length).toBe(1)
     })

     test('debe existir una etiqueta form ', () => { 

        render(<GifExpertApp/>)
         expect(screen.getAllByRole('form')).toBeTruthy()
         
       })


 })
 //