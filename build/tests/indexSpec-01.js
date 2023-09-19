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
const index_01_1 = require("../index-01");
it('getCountry("Serbia") basics data', () => __awaiter(void 0, void 0, void 0, function* () {
    const basicDetails = yield (0, index_01_1.getCountry)("Serbia");
    expect(basicDetails).toEqual({ capital: 'Belgrade', region: 'Europe', population: 6.908224, borders: 8 });
}));
it('getReginaCountries("Europe") countries', () => __awaiter(void 0, void 0, void 0, function* () {
    const countries = yield (0, index_01_1.getRegionCountries)("Europe");
    expect(countries.length).toEqual(53);
}));
it('highDencePopulation() overall world population', () => __awaiter(void 0, void 0, void 0, function* () {
    const population = yield (0, index_01_1.highDencePopulation)();
    expect(population.reduce((acc, elem) => acc + elem.population, 0)).toBeGreaterThanOrEqual(7);
}));
