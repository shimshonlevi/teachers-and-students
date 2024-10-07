"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const GradesSchema = new mongoose_1.default.Schema({
    subject: {
        type: String,
        required: [true, "Please enter subject"],
        trim: true
    },
    grade: {
        type: Number,
        required: [true, "Please enter grade"],
        trim: true
    }
});
const UserSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        required: [true, "Please enter full name"],
        unique: [true, "FullName already exists"],
        trim: true
    },
    passportId: {
        type: Number,
        required: [true, "Please enter passport id"],
        minlength: [9, "The passport id must be 9 digits"],
        maxlength: [9, "The passport id must be 9 digits"],
        unique: [true, "Passport id already exists"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        trim: true
    },
    grades: {
        type: [GradesSchema],
        trim: true
    },
    role: {
        type: String,
        required: [true, "Please enter role"],
        enum: ["admin", "user"],
        trim: true
    }
});
exports.default = mongoose_1.default.model("USER", UserSchema);
