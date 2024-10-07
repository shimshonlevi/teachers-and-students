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
exports.gradesAverage = exports.grades = exports.login = void 0;
const userServic_js_1 = require("../services/userServic.js");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, password } = req.body;
        if (!fullName || !password) {
            res.status(400).json({ error: "Username and password are required." });
            return;
        }
        const user = yield (0, userServic_js_1.userLogin)(fullName, password);
        if (!user) {
            res.status(401).json({ error: "Invalid username or password." });
            return;
        }
    }
    catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});
exports.login = login;
const grades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gradesUser = req.params.id;
        const grades = yield (0, userServic_js_1.userGrades)(gradesUser);
        res.status(201).json({ grades });
    }
    catch (error) {
        if (error.message === "Username already exists.") {
            res.status(409).json({ error: error.message });
        }
        else {
            console.error("Error registering user:", error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
});
exports.grades = grades;
const gradesAverage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gradesUser = req.params.id;
        const gradesAverage = yield (0, userServic_js_1.userGradesAverage)(gradesUser);
        res.status(201).json({ gradesAverage });
    }
    catch (error) {
        if (error.message === "Username already exists.") {
            res.status(409).json({ error: error.message });
        }
        else {
            console.error("Error registering user:", error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
});
exports.gradesAverage = gradesAverage;
