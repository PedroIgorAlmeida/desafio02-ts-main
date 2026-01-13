import { login } from "./login"

describe('login', () => {
    const mockAlert = jest.fn()
    const mockEmail = 'usuario@exemplo.com'
    
    beforeEach(() => {
        window.alert = mockAlert
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('Deve exibir um alert de boas vindas com o email do usuário', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vinda(o) ${mockEmail}!`)
    })

    it('Deve retornar void', () => {
        const result = login(mockEmail)
        expect(result).toBeUndefined()
    })
})