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
const form = document.querySelector('#search-form > form');
const input = document.querySelector('#input-localizacao');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input)
        return;
    const localizacao = input.value;
    if (localizacao.length < 3) {
        alert('O local precisa ter pelo menos 3 letras');
        return;
    }
    const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=001accd817c12b168516c84a375ba156&lang=pt_br&units=metric`);
    const dados = yield response.json();
    console.log(dados);
}));
