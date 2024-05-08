"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./db/index"));
dotenv_1.default.config();
const port = process.env.PORT || 5000;
(0, index_1.default)()
    .then(() => {
    app_1.default.listen(port, () => {
        console.log(`Server Start at http://localhost:${port}/`);
    });
    app_1.default.get('/', (req, res) => {
        res.send("GET Request Called");
    });
})
    .catch((err) => {
    console.log('Error in index file');
    console.log(err);
});
//# sourceMappingURL=index.js.map