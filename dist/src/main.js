"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const supertokens_node_1 = require("supertokens-node");
const auth_filter_1 = require("./auth/auth.filter");
const path_1 = require("path");
const hbs = require("hbs");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Apalkov Daniil App')
        .setDescription('My App API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', '..', 'views'));
    hbs.registerPartials((0, path_1.join)(__dirname, '..', '..', 'views/partials'));
    app.setViewEngine('hbs');
    app.enableCors({
        origin: ['http://localhost:1488'],
        allowedHeaders: ['content-type', ...supertokens_node_1.default.getAllCORSHeaders()],
        credentials: true,
    });
    app.useGlobalFilters(new auth_filter_1.SupertokensExceptionFilter());
    await app.listen(process.env.PORT || 1488);
}
bootstrap();
//# sourceMappingURL=main.js.map