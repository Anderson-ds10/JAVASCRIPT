const main = () => {
    try {
        codigo
    } catch (error) {
        console.error(`Deu erro no código. E o erro é: \n\n${error}`)    
    } finally {
        console.info(`Esse valor sempre será mostrado`)
    }
    
}

main()