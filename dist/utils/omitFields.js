"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omitField = exports.omitFields = void 0;
const omitFields = (users, keys) => {
    const omittedResult = users.map(user => {
        return Object.fromEntries(Object.entries(user).filter(([key]) => !keys.includes(key)));
    });
    return omittedResult;
};
exports.omitFields = omitFields;
const omitField = (user, keys) => {
    const result = Object.fromEntries(Object.entries(user).filter(([key]) => !keys.includes(key)));
    return result;
};
exports.omitField = omitField;
