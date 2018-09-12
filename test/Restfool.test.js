'use strict';
var should = require('chai').should(),
    expect = require('chai').expect();

var Restfool = require('../index');
var rf = new Restfool();

describe('# index', () => {

    it('returns index', () => {
        rf.index().should.equal('index');
    });

});
describe('# details', () => {

    it('returns details', () => {
        rf.details().should.equal('details');
    });

});
describe('# create', () => {

    it('returns create', () => {
        rf.create().should.equal('create');
    });

});
describe('# update', () => {

    it('returns update', () => {
        rf.update().should.equal('update');
    });

});
describe('# rewrite', () => {

    it('returns rewrite', () => {
        rf.rewrite().should.equal('rewrite');
    });

});
describe('# remove', () => {

    it('returns remove', () => {
        rf.remove().should.equal('remove');
    });

});