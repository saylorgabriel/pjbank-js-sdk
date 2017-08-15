'use strict';

const PJBankSDK = require('../../../../lib/pjbank');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;

const expect = require('chai').expect;
const assert = require('chai').assert;


suite("#Extrato", () => {
    
        test('Gerando extrato ', (done) => {

            const PJBank = new PJBankSDK(credencialCartao, chaveCartao);
            
            PJBank.Recebimento.Extrato()
                .then((extrato) => {
                    expect(extrato).to.have.property('extrato');
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    assert.isTrue(false);
                    done();
                });
        });

        test('Gerando extrato somente pagos', (done) => {
            
            const PJBank = new PJBankSDK(credencialCartao, chaveCartao);
            
            PJBank.Recebimento.Extrato({"pago" : "true"})
                .then((extrato) => {
                    expect(extrato).to.have.property('extrato');
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    assert.isTrue(false);
                    done();
                });
        });

        test('Gerando extrato filtrado entre datas', (done) => {
            
            const PJBank = new PJBankSDK(credencialCartao, chaveCartao);
            
            PJBank.Recebimento.Extrato({
                'data_inicio': '07/25/2017',
                'data_fim': '07/25/2017'
            })
            .then((extrato) => {
                expect(extrato).to.have.property('extrato');
                expect(extrato.extrato.length).to.be.equal(50);
                done();
            })
            .catch((err) => {
                console.log(err);
                assert.isTrue(false);
                done();
            });
        });

    });