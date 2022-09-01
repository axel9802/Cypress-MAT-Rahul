# Cypress-base-project
Cypress base project

Instalar cypress
npm -i init
npm install cypress --save-dev


Abrir cypress
./node_modules/.bin/cypress open
npm run cypress:open


Para que cypress ubique la carpeta de pruebas. Editar e. archivo cypress.config.js y agregar:
	specPattern: 'cypress/integration/examples/*.js'



Ejecutar en chrome (NO MUESTRA INTERFAZ POR ESO SE PONE RUN Y NO OPEN)
./node_modules/.bin/cypress run --browser chrome
