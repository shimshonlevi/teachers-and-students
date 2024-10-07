"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teacherController_js_1 = require("../controllers/teacherController.js");
const router = express_1.default.Router();
router.route('/login').post(teacherController_js_1.login);
router.route('/addGrade').put(teacherController_js_1.addGrade);
router.route('/removeGrade').delete(teacherController_js_1.removeGrade);
router.route('/editGrade').put(teacherController_js_1.editGrade);
router.route('/users').get(teacherController_js_1.users);
router.route('/usersGrades').get(teacherController_js_1.usersGrades);
router.route('/usersGradesAverage').get(teacherController_js_1.usersGradesAverage);
router.route('/deleteUser').delete(teacherController_js_1.deleteUser);
exports.default = router;
