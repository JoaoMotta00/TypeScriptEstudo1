"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("firebase-admin/app");
const index_1 = require("./routes/index");
const error_handler_middleware_1 = require("./middleware/error-handler.middleware");
const page_not_found_middleware_1 = require("./middleware/page-not-found.middleware");
(0, app_1.initializeApp)();
const app = (0, express_1.default)();
(0, index_1.routes)(app);
(0, page_not_found_middleware_1.pageNotFoundHandler)(app);
(0, error_handler_middleware_1.errorHandler)(app);
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");
});
//# sourceMappingURL=index.js.map