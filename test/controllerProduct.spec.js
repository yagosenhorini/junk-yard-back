const request = require('request');
const should = require('should');
const url = 'http://localhost:3000/v1';
const endpoint = '/products';

describe("Deve testar a controller", () => {
    test('Deve efetuar um request', done => {
        request.get({
            url: url + endpoint
        }, (error, response, body) => {
            let _body = {};
            try {
                _body = JSON.parse(body);
            } catch (e) {
                _body = {};
            }
            console.log(_body);
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    test('Deve efetuar um request e trazer o nome, peso e preço', done => {
        request.get({
            url: url + endpoint
        }, (error, body, response) => {
            let _body = {};
            try {
                _body = JSON.parse(body);
            } catch (e) {
                _body = {};
            }
            if (_body.should.Object('name')) {
                expect(_body.name).toEqual('Testado');
            }

            // expect(_body.product.name).toEqual('Testado');
            done();
        });
    })
});
