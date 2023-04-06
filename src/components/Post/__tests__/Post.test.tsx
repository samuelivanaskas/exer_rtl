import Post from '..'

describe('Teste para o componente imagem', () => {
    test('Deve renderizar imagem corretamente', () => {
        renderizacomProvider(<Post image={imageUrl} />)
        const image = screen.getByTestId('campo-imagem')
    })

    test('Deve renderizar texto corretamente', () => {
        renderizacomProvider(<Post text={children} />)
        const texto= screen.getByTestId('campo-texto')
    })
})