import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'Rest API Node.js /Express / Typescript',
            version: "1.0.0",
            description: "API Docs for Productss"   
        }
    },
    apis: ['./src/router.ts']
}
const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions : SwaggerUiOptions = {
    customCss: `
    .topbar-wrapper .link {
        content: url('https://img.freepik.com/vector-gratis/diseno-logotipo-dinero-degradado_23-2150934186.jpg?w=740&t=st=1722486058~exp=1722486658~hmac=14438def91991ec08a110b19caa695d176f1be9a6315d7401e748bd589c67b24')
        height: 80px;
        width: auto
    }
    .swagger-ui .topbar {
        background-color: #2b3b45
    }
    `,
    customSiteTitle: 'Documentacion REST API Express / TypeScript'
}

export default swaggerSpec
export {
    swaggerUiOptions
}