"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGradesAverage = exports.userGrades = exports.userLogin = void 0;
const data_js_1 = require("../DAL/data.js");
const userLogin = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userToAdd = yield (0, data_js_1.create)(user);
    return userToAdd;
});
exports.userLogin = userLogin;
const userGrades = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userToAdd = yield (0, data_js_1.create)(user);
    return userToAdd;
});
exports.userGrades = userGrades;
const userGradesAverage = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userToAdd = yield (0, data_js_1.create)(user);
    return userToAdd;
});
exports.userGradesAverage = userGradesAverage;
