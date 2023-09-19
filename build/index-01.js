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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.highDencePopulation = exports.getRegionCountries = exports.getCountry = void 0;
const axios_1 = __importDefault(require("axios"));
const getCountry = (countryName) => __awaiter(void 0, void 0, void 0, function* () {
    const getApi = yield (0, axios_1.default)(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = getApi.data[0];
    const countryDetail = {
        capital: data.capital[0],
        region: data.region,
        population: data.population / 1000000,
        borders: data.borders.length
    };
    console.log(countryDetail);
    return countryDetail;
});
exports.getCountry = getCountry;
const getRegionCountries = (region) => __awaiter(void 0, void 0, void 0, function* () {
    const getApi = yield (0, axios_1.default)(`https://restcountries.com/v3.1/region/${region}`);
    const data = getApi.data;
    const countries = [];
    for (const country of data) {
        const countryName = country.name.common;
        countries.push(countryName);
    }
    return countries;
});
exports.getRegionCountries = getRegionCountries;
const highDencePopulation = () => __awaiter(void 0, void 0, void 0, function* () {
    const getApi = yield (0, axios_1.default)('https://restcountries.com/v3.1/all');
    const data = getApi.data;
    const highDenceCountries = [];
    for (const country of data) {
        const populationInMil = country.population / 1000000000;
        highDenceCountries.push({ name: country.name.common, population: populationInMil });
    }
    return highDenceCountries;
});
exports.highDencePopulation = highDencePopulation;
